/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from 'src/core/entities/group';
import { In, MoreThanOrEqual, Repository } from 'typeorm';

import { PermissionsService } from 'src/permissions/permissions.service';
import { LevelsService } from 'src/levels/levels.service';
@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupsRepository: Repository<Group>,
    private permsService: PermissionsService,
    private levelService: LevelsService,
  ) {}

  async getAll(
    userID: number,
    query?: any,
    includeStudents = false,
  ): Promise<Group[]> {
    const perms = await this.permsService.getPerms(userID);
    let output: Group[] = [];
    const filter = {
      where: {
        groupId: query.groupId
          ? In(query.groupId?.split(',') || [])
          : MoreThanOrEqual(0),
        levelId: query.levelId
          ? In(query.levelId?.split(',') || [])
          : MoreThanOrEqual(0),
        departementId: query.departementId
          ? In(query.departementId?.split(',') || [])
          : MoreThanOrEqual(0),
        teacherId: query.teacherId
          ? In(query.teacherId?.split(',') || [])
          : MoreThanOrEqual(0),
        day: query.day ? In(query.day?.split(',') || []) : MoreThanOrEqual(0),
        nbStudents: query.nbStudents
          ? In(query.nbStudents?.split(',') || [])
          : MoreThanOrEqual(0),
      },
      relations: ['teacher', 'studentgroups', 'studentgroups.student'],
    };
    if (await this.permsService.isAdmin(userID)) {
      output = await this.groupsRepository.find(filter);
    } else {
      const perms1 = perms.filter(x => x.permissionId == 1);
      const perms2 = perms.filter(x => x.permissionId == 2);
      if (perms2.length > 0) {
        //View Grp Dept
        let depts = perms2.map(x => x.departementId);
        depts = query.departementId
          ? depts.concat(depts, query.departementId.split(','))
          : depts;
        filter.where.departementId =
          depts && depts.length > 0 ? In(depts) : MoreThanOrEqual(0);
        this.addToList(output, await this.groupsRepository.find(filter));
      }
      if (perms1.length > 0) {
        // View Grp Self
        let depts = perms1.map(x => x.departementId);
        depts = query.departementId
          ? depts.concat(depts, query.departementId.split(','))
          : depts;
        filter.where.departementId =
          depts && depts.length > 0 ? In(depts) : MoreThanOrEqual(0);
        filter.where.teacherId = In([userID]);
        this.addToList(output, await this.groupsRepository.find(filter));
      }
    }
    return output.map(x => {
      delete x.teacher.password;
      includeStudents && delete x.studentgroups;
      return x;
    });
  }

  /**
   * Adds list B to list A (Checks if group already in list)
   * @param lista
   * @param listb
   */
  addToList(lista: Group[], listb: Group[]): Group[] {
    for (const elementb of listb) {
      if (!lista.find(x => x.groupId == elementb.groupId)) lista.push(elementb);
    }
    return lista;
  }
}
