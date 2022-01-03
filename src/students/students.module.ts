import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departement } from 'src/core/entities/departement';
import { Departementpermissionrole } from 'src/core/entities/models/permissions/departement_permission_role';
import { Group } from 'src/core/entities/group';
import { Level } from 'src/core/entities/level';
import { Studentgroup } from 'src/core/entities/student_group';
import { Studentstatus } from 'src/core/entities/student_status';
import { GroupService } from 'src/groups/group.service';
import { LevelsService } from 'src/levels/levels.service';
import { PermissionsService } from 'src/permissions/permissions.service';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import {
  Departementpermission,
  Departementstaff,
} from 'src/core/entities/models/permissions';

@Module({
  controllers: [StudentsController],
  imports: [
    TypeOrmModule.forFeature([
      Studentstatus,
      Studentgroup,
      Departementstaff,
      Departement,
      Group,
      Departementpermissionrole,
      Departementpermission,
      Level,
    ]),
  ],
  providers: [LevelsService, StudentsService, PermissionsService, GroupService],
})
export class StudentsModule {}
