import { Module } from '@nestjs/common';

import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from 'src/auth/auth.service';

import { User } from 'src/entities/User';
import { Group } from 'src/entities/Group';
import { Departement } from 'src/entities/Departement';
import { Studentgroup } from 'src/entities/Studentgroup';
import { Departementstaff } from 'src/entities/Departementstaff';
import { Departementpermission } from 'src/entities/Departementpermission';
import { Departementpermissionrole } from 'src/entities/Departementpermissionrole';
import { UsersService } from 'src/users/users.service';
import { PermissionsModule } from 'src/permissions/permissions.module';
import { PermissionsService } from 'src/permissions/permissions.service';
import { DepartementService } from 'src/departement/departement.service';
import { LevelsService } from 'src/levels/levels.service';
import { Level } from 'src/entities/Level';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Level, Departementstaff, Departementpermissionrole, Departementpermission, Group, Studentgroup, Departement]),
    PermissionsModule
  ],
  controllers: [GroupController],
  providers: [GroupService, UsersService, PermissionsService, DepartementService, LevelsService]
})
export class GroupsModule { }
