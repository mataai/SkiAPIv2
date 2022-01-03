import { Module } from '@nestjs/common';
import { DepartementController } from './departement.controller';
import { DepartementService } from './departement.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Group } from 'src/core/entities/group';
import { Departement } from 'src/core/entities/departement';
import { User } from 'src/core/entities/user';
import { Departementpermissionrole } from 'src/core/entities/models/permissions/departement_permission_role';
import { Level } from 'src/core/entities/level';
import {
  Departementpermission,
  Departementrole,
  Departementstaff,
} from 'src/core/entities/models/permissions';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Departement,
      Group,
      Departementstaff,
      Departementpermission,
      Departementrole,
      Departementpermissionrole,
      Level,
    ]),
  ],
  controllers: [DepartementController],
  providers: [DepartementService],
})
export class DepartementModule {}
