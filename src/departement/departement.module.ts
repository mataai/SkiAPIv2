import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { DepartementController } from './departement.controller';
import { DepartementService } from './departement.service';
import {
  Departementpermission,
  Departementpermissionrole,
  Departementrole,
  Departementstaff,
} from '../core/entities/models/permissions';
import { User, Departement } from '../core/entities';
import { Group } from '../core/entities/group';
import { Level } from '../core/entities/models';

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
