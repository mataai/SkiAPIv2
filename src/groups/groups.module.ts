import { Module } from '@nestjs/common';

import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from 'src/core/entities/user';
import { Group } from 'src/core/entities/group';
import { Departement } from 'src/core/entities/departement';
import { Studentgroup } from 'src/core/entities/student_group';
import { Departementpermissionrole } from 'src/core/entities/models/permissions/departement_permission_role';
import { UsersService } from 'src/users/users.service';
import { PermissionsModule } from 'src/permissions/permissions.module';
import { PermissionsService } from 'src/permissions/permissions.service';
import { DepartementService } from 'src/departement/departement.service';
import { LevelsService } from 'src/levels/levels.service';
import { Level } from 'src/core/entities/level';
import {
  Departementpermission,
  Departementstaff,
} from 'src/core/entities/models/permissions';

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
