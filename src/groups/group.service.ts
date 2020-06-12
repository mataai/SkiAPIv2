import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from 'src/entities/Group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {

    constructor(
        @InjectRepository(Group)
        private groupsRepository: Repository<Group>, ) {

    }


    getAll() {
        return this.groupsRepository.find();
    }

    getDepart(ID: number){

        return this.groupsRepository.find({ where: { departementID: ID } });
    }
}
