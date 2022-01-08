import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../core/entities';
import { Level } from '../core/entities/models';
import {
  Departementpermission,
  Departementpermissionrole,
  Departementstaff,
} from '../core/entities/models/permissions';
import { PermissionsService } from '../permissions/permissions.service';

import { UsersService } from './users.service';

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
