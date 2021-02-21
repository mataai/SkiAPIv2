/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginResponse } from 'src/entities/DTO/DTO';
import { User } from 'src/entities/User';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService) { }

    async validateUser(ID: string, pass: string): Promise<User> {
        const user = await this.userService.findOne(ID, null);
        if (user && user.password === pass) {
            delete user.password;
            return user;
        }
        return null;
    }

    async login(body: any) {
        const user = await this.validateUser(body.userID, body.password);
        let output: LoginResponse;
        if (user) {
            const payload = { username: user.userId, sub: user.userId };
            output = { employe: user, token: this.jwtService.sign(payload) }
        }
        return output;
    }

}