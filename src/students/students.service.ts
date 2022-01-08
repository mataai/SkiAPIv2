import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Studentgroup } from '../core/entities/student_group';
import { GroupService } from '../groups/group.service';
import { PermissionsService } from '../permissions/permissions.service';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Studentgroup)
    private studentGroupRepo: Repository<Studentgroup>,
    private permsService: PermissionsService,
    private groupService: GroupService,
  ) {}

  getAll(userId: number, params: any): any {
    throw new Error('Method not implemented.');
  }

  async setStatus(
    userID: number,
    studentID: number,
    status: number,
  ): Promise<boolean> {
    let output = false;

    if (await this.permsService.isAdmin(userID)) {
      output = true;
    }

    const sG = await this.studentGroupRepo.findOne({
      where: { studentId: studentID },
      relations: ['group'],
    });
    if (sG === undefined) {
      return output;
    }

    const perms = await this.permsService.getPermsByDept(
      userID,
      sG.group.departementId,
    );

    if (perms.find(x => x.permissionId == 5) && sG.group.teacherId == userID) {
      //edit group self

      output = true;
    }
    if (perms.find(x => x.permissionId == 6)) {
      output = true;
    }

    if (output) {
      console.log(sG);
      sG.status = status;
      console.log(sG);
      this.studentGroupRepo.save(sG);
    }
    return output;
  }
}
