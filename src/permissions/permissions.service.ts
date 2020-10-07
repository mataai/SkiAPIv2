
import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User'
import { Departementstaff } from 'modelGen/output/entities/Departementstaff';
import { Departementpermissionrole } from 'modelGen/output/entities/Departementpermissionrole';
import { Departementpermission } from 'modelGen/output/entities/Departementpermission';


@Injectable()
export class PermissionsService {


    constructor(
        @InjectRepository(Departementstaff)
        private StaffRepo: Repository<Departementstaff>,
        @InjectRepository(Departementpermissionrole)
        private PermissionroleRepo: Repository<Departementpermissionrole>,
        @InjectRepository(Departementpermission)
        private PermissionRepo: Repository<Departementpermission>,
    ) { }


    async isAdmin(userID: number): Promise<boolean> {
        return this.StaffRepo.findOne({ where: { userId: userID, roleId: 1 } }) != null;
    }

    async getPerms(userID: number): Promise<Departementpermissionrole[]> {
        const roles = (await this.StaffRepo.find({ where: { userId: userID } }));
        const roleIds = [];
        roles.forEach(element => {
            roleIds.push(element.roleId);
        });
        return (await this.PermissionroleRepo.find({ where: { roleId: In(roleIds) } }));
    }

    async getPermsByDept(userID: number, deptID: number): Promise<Departementpermissionrole[]> {
        const roles = (await this.StaffRepo.findOne({ where: { userId: userID, departementId: deptID } }));
        return (await this.PermissionroleRepo.find({ where: { roleId: roles, departementId: deptID }, relations: ["permission"] }));
    }
}
