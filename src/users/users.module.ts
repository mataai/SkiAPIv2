import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Level } from 'src/entities/Level';
import { User } from 'src/entities/User';
import { Departementstaff } from 'src/entities/Departementstaff';
import { Departementpermissionrole } from 'src/entities/Departementpermissionrole';
import { Departementpermission } from 'src/entities/Departementpermission';
import { PermissionsService } from 'src/permissions/permissions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Level, User, Departementstaff, Departementpermissionrole, Departementpermission])],
  providers: [UsersService,PermissionsService],
  exports: [UsersService],
})
export class UsersModule { }
