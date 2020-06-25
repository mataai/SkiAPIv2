/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Departementstaff } from 'src/entities/Departementstaff';
import { Departementpermissionrole } from 'src/entities/Departementpermissionrole';
import { Departementpermission } from 'src/entities/Departementpermission';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        @InjectRepository(User)
        private UserRepo: Repository<User>,
        private jwtService: JwtService) { }

    async validateUser(ID: string, pass: string): Promise<any> {
        const user = await this.UserRepo.findOne({ where: { userId: ID } });
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }


}