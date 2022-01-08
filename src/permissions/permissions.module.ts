import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../core/entities';
import { Level } from '../core/entities/models';
import {
  Departementstaff,
  Departementpermissionrole,
  Departementpermission,
} from '../core/entities/models/permissions';
import { PermissionsService } from './permissions.service';

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
  providers: [PermissionsService],
  exports: [PermissionsService],
})
export class PermissionsModule {}
