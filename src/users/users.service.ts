/* eslint-disable prefer-const */

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User'
import { Departementstaff } from 'src/entities/Departementstaff';
import { Departementpermissionrole } from 'src/entities/Departementpermissionrole';
import { Departementpermission } from 'src/entities/Departementpermission';


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

    async findOne(ID: string, relations: string[]): Promise<User> {
        let user;

        if (relations) {
            
            user = await this.usersRepository.findOne({ where: { userId: parseInt(ID) }, relations: relations });
        } else {
            user = await this.usersRepository.findOne({ where: { userId: parseInt(ID) } });
        }
        return user;
    }

    async getRoles(ID: string): Promise<any> {
        let output = {};
        const deptstaff = await this.StaffRepo.find({ where: { userId: parseInt(ID) }, relations: ["role", "departement"] });
        for await (const element of deptstaff) {
            output[element.departement.departementName] = element.role.roleName;
        };
        return output;
    }



}