import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from 'src/entities/Group';
import { Repository, In } from 'typeorm';

import { UsersService } from 'src/users/users.service';
import { promises } from 'dns';
import { PermissionsService } from 'src/permissions/permissions.service';
import { DepartementService } from 'src/departement/departement.service';
import { LevelsService } from 'src/levels/levels.service';
import { Departement } from 'modelGen/output/entities/Departement';
import { Departementpermissionrole } from 'src/entities/Departementpermissionrole';

@Injectable()
export class GroupService {

    constructor(
        @InjectRepository(Group)
        private groupsRepository: Repository<Group>,
        private userService: UsersService,
        private permsService: PermissionsService,
        private departementService: DepartementService,
        private levelService: LevelsService) { }


    async getAll(userID: number): Promise<Group[]> {
        const perms = await this.permsService.getPerms(userID);
        console.log('perms :>> ', perms);
        let output: Group[] = [];
        if (this.permsService.isAdmin(userID)) {
            output.concat(await this.groupsRepository.find());
        }
        if (perms.find(x => x.permissionId == 1)) { // View Grp Self
            const perm = perms.find(x => x.permissionId == 1)
            output = await this.groupsRepository.find({ where: { teacherId: userID } });
        }
        if (perms.find(x => x.permissionId == 2)) { //View Grp Dept
            const perm = perms.find(x => x.permissionId == 2)
            output = await this.groupsRepository.find({ where: { departementId: perm.departementId } });
        }
        return output;
    }

    async getGroupsByDepart(deptID: number, userID: number): Promise<Group[]> {

        const perms = await this.permsService.getPermsByDept(userID, deptID);
        console.log(perms.find(x => x.permissionId == 2));
        let output: Group[] = [];

        if (perms.find(x => x.permissionId == 1)) { // View Grp Self
            output = await this.groupsRepository.find({ where: { teacherId: userID, departementId: deptID } });
        }
        if (perms.find(x => x.permissionId == 2)) { //View Grp Dept
            output = await this.groupsRepository.find({ where: { departementId: deptID } });
        }
        return output;
    }

    async getGroupsByLevel(levelID: number, userID: number): Promise<Group[]> {

        const depts = await this.levelService.getDepts(levelID);
        let perms: Departementpermissionrole[] = []

        for (const item of depts) {
            const tmp = await this.permsService.getPermsByDept(userID, item.departementId);
            perms = perms.concat(tmp);
        }

        let output: Group[] = [];

        if (this.permsService.isAdmin(userID)) {

        }
        const perms1 = perms.filter(x => x.permissionId == 1);
        console.log(perms);
        if (perms1.length > 0) {
            for (const element of perms1) {// View Grp Self
                output = await this.groupsRepository.find({ where: { teacherId: userID, levelId: levelID, departementId: element.departementId } });
            }
        }

        const perms2 = perms.filter(x => x.permissionId == 2);
        if (perms2.length > 0) { //View Grp Dept
            for (const element of perms1) {// View Grp Self
                output = await this.groupsRepository.find({ where: { levelId: levelID, departementId: element.departementId } });
            }
        }
        return output;
    }
}
