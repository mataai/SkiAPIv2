import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departementpermissionrole } from 'src/core/entities/models/permissions/departement_permission_role';
import { Level } from 'src/core/entities/level';
import { User } from 'src/core/entities/user';
import { PermissionsService } from './permissions.service';
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
  providers: [PermissionsService],
  exports: [PermissionsService],
})
export class PermissionsModule {}
