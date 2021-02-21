/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from 'src/entities/Group';
import { In, Repository } from 'typeorm';

import { PermissionsService } from 'src/permissions/permissions.service';
import { LevelsService } from 'src/levels/levels.service';

@Injectable()
export class GroupService {

    constructor(
        @InjectRepository(Group)
        private groupsRepository: Repository<Group>,
        private permsService: PermissionsService,
        private levelService: LevelsService) { }


    async getByID(userID: number, groupID: number): Promise<Group> {

        if (!groupID) {
            return;
        }
        const perms = await this.permsService.getPerms(userID);
        let output: Group;

        if (await this.permsService.isAdmin(userID)) {

            console.log("admin");
            output = await this.groupsRepository.findOne({ where: { groupId: groupID }, relations: ["teacher", "studentgroups", "studentgroups.student"] });
        }
        else if (await perms.find(x => x.permissionId == 2)) { //View Grp Dept

            const perm = perms.filter(x => x.permissionId == 2)
            output = await this.groupsRepository.findOne({ where: { departementId: In(perm.map(x => x.departementId)), groupId: groupID }, relations: ["teacher", "studentgroups", "studentgroups.student"] });
        }
        else if (await perms.find(x => x.permissionId == 1)) { // View Grp Self
            output = await this.groupsRepository.findOne({ where: { teacherId: userID, groupId: groupID }, relations: ["teacher", "studentgroups", "studentgroups.student"] });
        }
        if (!output)
            throw new UnauthorizedException;
        delete output.teacher.password;
        return output;
    }

    async getAll(userID: number, query?: any): Promise<Group[]> {//todo: must add to list not overwrite what has been added before.
        const perms = await this.permsService.getPerms(userID);
        let output: Group[] = [];
        if (await this.permsService.isAdmin(userID)) {
            output = await this.groupsRepository.find();
        } else {
            const perms1 = perms.filter(x => x.permissionId == 1);
            const perms2 = await perms.filter(x => x.permissionId == 2);
            if (perms2) { //View Grp Dept
                const depts = perms2.map(x => x.departementId)
                this.addToList(output, await this.groupsRepository.find({ where: { departementId: In(depts) } }));
            }
            if (perms1) { // View Grp Self
                const depts = perms1.map(x => x.departementId)
                this.addToList(output, await this.groupsRepository.find({ where: { teacherId: userID, departementId: In(depts) } }));
            }
        }
        
        if (!query.level && !query.dept && !query.prof && !query.day && !query.time && !query.nbStudents)
            return output;


        return output.filter(x =>
            (!query.level || x.levelId == query.level) &&
            (!query.dept || x.departementId == query.dept) &&
            (!query.prof || x.teacherId == query.prof) &&
            (!query.day || x.day == query.day) &&
            (!query.time || x.time == query.time) &&
            (!query.nbStudents || x.nbStudents == query.nbStudents)
        )
    }

    async getGroupsByDepart(userID: number, deptID: number): Promise<Group[]> {

        if (await this.permsService.isAdmin(userID)) {
            return await this.groupsRepository.find({ where: { departementId: deptID } });
        }
        else {
            const perms = await this.permsService.getPermsByDept(userID, deptID);
            if (perms.filter(x => x.permissionId == 2 && x.departementId == deptID)) { //View Grp Dept
                console.log("View Grp Dept");

                return await this.groupsRepository.find({ where: { departementId: deptID } });
            }
            else if (perms.filter(x => x.permissionId == 1 && x.departementId == deptID)) { // View Grp Self
                console.log("View Grp Self");
                return await this.groupsRepository.find({ where: { teacherId: userID, departementId: deptID } });
            }
        }
        return [];
    }

    async getGroupsByLevel(userID: number, levelID: number): Promise<Group[]> {

        let output: Group[] = []
        output = []
        if (await this.permsService.isAdmin(userID)) {
            console.log("admin");

            return await this.groupsRepository.find({ where: { levelId: levelID } });
        }
        else {
            const depts = await this.levelService.getDepts(levelID);
            for (const key of depts) {
                const deptID = key.departementId
                const perms = await this.permsService.getPermsByDept(userID, deptID);
                if (perms.filter(x => x.permissionId == 2 && x.departementId == deptID).length > 0) {
                    this.addToList(output, await this.groupsRepository.find({ where: { departementId: deptID, levelId: levelID } }));
                }
                else if (perms.filter(x => x.permissionId == 1 && x.departementId == deptID).length > 0) { // View Grp Self
                    this.addToList(output, await this.groupsRepository.find({ where: { teacherId: userID, levelId: levelID } }));
                }
            }
        }
        return output;


        //#region idk
        // if (await this.permsService.isAdmin(userID)) {
        //     console.log("Admin");
        //     console.log(userID);
        //     console.log(this.permsService.isAdmin(userID));


        //     const output = await this.groupsRepository.find({ where: { levelId: levelID }, relations: ["teacher"] });
        //     output.map(x => delete x.teacher.password);
        //     return output;
        // }
        // console.log();

        // const depts = await this.levelService.getDepts(levelID);
        // let perms: Departementpermissionrole[] = []

        // for (const item of depts) {
        //     const tmp = await this.permsService.getPermsByDept(userID, item.departementId);
        //     perms = perms.concat(tmp);
        // }

        // let output: Group[] = [];
        // console.log(perms);

        // if (perms.filter(x => x.permissionId == 1)) { //View Grp Self
        //     console.log("View Grp Self");
        //     console.log(userID + " " + levelID + " ");

        //     output = await this.groupsRepository.find({ where: { teacherId: userID, levelId: levelID, departementId: In(perms.map(x => x.departementId && x.permissionId == 1)) }, relations: ["teacher"] });//todo: must add to list not overwrite what has been added before
        //     console.log("ok");

        // }

        // if (perms.filter(x => x.permissionId == 2)) { //View Grp Dept
        //     console.log("View Grp Dept");
        //     this.addToList(output, await this.groupsRepository.find({ where: { levelId: levelID, departementId: In(perms.map(x => x.departementId && x.permissionId == 2)) }, relations: ["teacher"] }));
        // }

        // output.map(x => delete x.teacher.password);

        // return output;
        //#endregion
    }

    /**
     * Adds list B to list A (Checks if group already in list)
     * @param lista 
     * @param listb 
     */
    addToList(lista: Group[], listb: Group[]): Group[] {
        for (const elementb of listb) {
            let inlist = false;
            for (const elementa of lista) {
                if (elementb.groupId == elementa.groupId) {
                    inlist = true;
                    break;
                }
            }
            if (!inlist)
                lista.push(elementb);
        }
        return lista;
    }
}
