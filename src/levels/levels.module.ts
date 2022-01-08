import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LevelsService } from './levels.service';
import { LevelsController } from './levels.controller';
import { Group } from '../core/entities/group';
import { Level } from '../core/entities/models';
import {
  Departementstaff,
  Departementpermissionrole,
  Departementpermission,
} from '../core/entities/models/permissions';
import { GroupService } from '../groups/group.service';
import { PermissionsService } from '../permissions/permissions.service';

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
