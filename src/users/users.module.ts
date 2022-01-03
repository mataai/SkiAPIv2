import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Level } from 'src/core/entities/level';
import { User } from 'src/core/entities/user';
import { Departementpermissionrole } from 'src/core/entities/models/permissions/departement_permission_role';
import { PermissionsService } from 'src/permissions/permissions.service';
import {
  Departementpermission,
  Departementstaff,
} from 'src/core/entities/models/permissions';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Level,
      User,
      Departementstaff,
      Departementpermissionrole,
      Departementpermission,
    ]),
  ],
  providers: [UsersService, PermissionsService],
  exports: [UsersService],
})
export class UsersModule {}
