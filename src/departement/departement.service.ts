/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Departement } from '../core/entities';

@Injectable()
export class DepartementService {
  constructor(
    @InjectRepository(Departement)
    private departRepository: Repository<Departement>,
  ) {}

  async getNextDept(deptID: number) {
    let depts = await this.departRepository.find({
      where: { departementId: deptID },
    });
    let levels: number[] = [];
    depts.forEach(element => {
      levels.push(element.departementId);
    });
    return this.departRepository.find({ where: { levels: In(levels) } });
  }

  getAll(deptId: number): Promise<Departement> {
    return this.departRepository.findOneOrFail({
      where: { departementId: deptId },
    });
  }

  getById(deptId: number): Promise<Departement> {
    return this.departRepository.findOneOrFail({
      where: { departementId: deptId },
      relations: [
        'levels',
        'departementpermissionroles',
        'departementstaffs',
        'groups',
      ],
    });
  }
}
