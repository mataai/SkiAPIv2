import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { User, Departement } from '../core/entities';
import { Group } from '../core/entities/group';
import { Level } from '../core/entities/models';
import {
  Departementstaff,
  Departementpermissionrole,
  Departementpermission,
} from '../core/entities/models/permissions';
import { Studentgroup } from '../core/entities/student_group';
import { DepartementService } from '../departement/departement.service';
import { LevelsService } from '../levels/levels.service';
import { PermissionsModule } from '../permissions/permissions.module';
import { PermissionsService } from '../permissions/permissions.service';
import { UsersService } from '../users/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Level,
      Departementstaff,
      Departementpermissionrole,
      Departementpermission,
      Group,
      Studentgroup,
      Departement,
    ]),
    PermissionsModule,
  ],
  controllers: [GroupController],
  providers: [
    GroupService,
    UsersService,
    PermissionsService,
    DepartementService,
    LevelsService,
  ],
})
export class GroupsModule {}
