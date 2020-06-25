/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { Departement } from 'src/entities/Departement';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Group } from 'src/entities/Group';
import { Level } from 'src/entities/Level';

@Injectable()
export class DepartementService {

    constructor(
        @InjectRepository(Group)
        private groupsRepository: Repository<Group>,
        @InjectRepository(Departement)
        private departRepository: Repository<Departement>,
        @InjectRepository(Level)
        private levelsRepository: Repository<Level>,
    ) { }

    async getNextDept(deptID: number) {
        let depts = (await this.departRepository.find({ where: { departementId: deptID } }));
        let levels: number[];
        depts.forEach(element => {
            levels.push(element.departementId);
        });
        let level = await this.levelsRepository.find({ where: { nextLevelId: In(levels) } })
        return this.departRepository.find({ where: { levels: In(levels) } })
    }
}
