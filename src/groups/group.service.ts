import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from 'src/entities/Group';
import { Repository, In } from 'typeorm';

import { UsersService } from 'src/users/users.service';
import { promises } from 'dns';

@Injectable()
export class GroupService {

    constructor(
        @InjectRepository(Group)
        private groupsRepository: Repository<Group>,
        private userService: UsersService) { }


    getAll() {
        return this.groupsRepository.find();
    }

    async getGroupsByDepart(deptID: number, userID: number): Promise<Group[]> {
        let tmp: number[] = [];
        const perms = await this.userService.getPerms(userID, deptID);
        let output: Group[] = [];
        await perms.forEach(async perm => {
            if (perm.permissionId == 2) {
                console.log("ok")
                tmp.push(perm.departementId);
                output.concat(await this.groupsRepository.find({ where: { departementId: In(tmp) } }));
            }
            if (perm.permissionId == 1) {
                console.log(perm.permissionId)
                console.log(userID);
                let tmp = await this.groupsRepository.find({ where: { teacherId: userID } });
                console.log("if")
                console.log(tmp)
                output.concat(tmp);
            }
            console.log("for")
            console.log(output)
        });
        console.log(output)

        return output;
    }
}
