import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departementpermission } from 'src/entities/Departementpermission';
import { Departementpermissionrole } from 'src/entities/Departementpermissionrole';
import { Departementstaff } from 'src/entities/Departementstaff';
import { Level } from 'src/entities/Level';
import { User } from 'src/entities/User';
import { PermissionsService } from './permissions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Level, User, Departementstaff, Departementpermissionrole, Departementpermission])],
  providers: [PermissionsService],
  exports: [PermissionsService],
})
export class PermissionsModule {}
