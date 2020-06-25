
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User'
import { Departementstaff } from 'modelGen/output/entities/Departementstaff';
import { Departementpermissionrole } from 'modelGen/output/entities/Departementpermissionrole';
import { Departementpermission } from 'modelGen/output/entities/Departementpermission';


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        @InjectRepository(Departementstaff)
        private StaffRepo: Repository<Departementstaff>,
        @InjectRepository(Departementpermissionrole)
        private PermissionroleRepo: Repository<Departementpermissionrole>,
        @InjectRepository(Departementpermission)
        private PermissionRepo: Repository<Departementpermission>,
    ) { }


    async findAll(): Promise<User[] | undefined> {
        return this.usersRepository.find();
    }

    async findOne(ID: string): Promise<User | undefined> {
        return this.usersRepository.findOne({ where: { userId: parseInt(ID) } });
    }


    async getPerms(userID: number, deptID: number) {
        const roleID = (await this.StaffRepo.findOne({ where: { userId: userID } })).roleId;
        return await this.PermissionroleRepo.find({ where: { roleId: roleID, departementId: deptID }, relations: ["permission"] });
    }


}