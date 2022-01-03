import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LevelsService } from './levels.service';
import { LevelsController } from './levels.controller';
import { Level } from 'src/core/entities/level';
import { GroupService } from 'src/groups/group.service';
import { Group } from 'src/core/entities/group';
import { PermissionsService } from 'src/permissions/permissions.service';
import { Departementpermissionrole } from 'src/core/entities/models/permissions/departement_permission_role';
import {
  Departementpermission,
  Departementstaff,
} from 'src/core/entities/models/permissions';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Level,
      Group,
      Departementstaff,
      Departementpermissionrole,
      Departementpermission,
    ]),
  ],
  providers: [LevelsService, GroupService, PermissionsService],
  controllers: [LevelsController],
})
export class LevelsModule {}
