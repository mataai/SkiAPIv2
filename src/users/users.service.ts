/* eslint-disable prefer-const */

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/core/entities';
import {
  Departementpermission,
  Departementpermissionrole,
  Departementstaff,
} from 'src/core/entities/models/permissions';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private _usersRepo: Repository<User>,
    @InjectRepository(Departementstaff)
    private _staffRepo: Repository<Departementstaff>,
    @InjectRepository(Departementpermissionrole)
    private _permissionsRoleRepo: Repository<Departementpermissionrole>,
    @InjectRepository(Departementpermission)
    private _permissionRepo: Repository<Departementpermission>,
  ) {}

  public async findAll(): Promise<User[] | undefined> {
    return this._usersRepo.find();
  }

  public findOne(ID: string, relations: string[]): Promise<User> {
    return this._usersRepo.findOne({
      where: { userId: parseInt(ID) },
      relations: relations,
    });
  }

  // TODO Refactor
  public async getRoles(ID: string): Promise<any> {
    let output = {};
    const deptstaff = await this._staffRepo.find({
      where: { userId: parseInt(ID) },
      relations: ['role', 'departement'],
    });
    for (const element of deptstaff) {
      output[element.departement.departementName] = element.role.roleName;
    }
    return output;
  }
}
