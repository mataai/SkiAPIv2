import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departement } from 'src/entities/Departement';
import { Departementpermission } from 'src/entities/Departementpermission';
import { Departementpermissionrole } from 'src/entities/Departementpermissionrole';
import { Departementstaff } from 'src/entities/Departementstaff';
import { Group } from 'src/entities/Group';
import { Level } from 'src/entities/Level';
import { Studentgroup } from 'src/entities/Studentgroup';
import { Studentstatus } from 'src/entities/Studentstatus';
import { GroupService } from 'src/groups/group.service';
import { LevelsService } from 'src/levels/levels.service';
import { PermissionsService } from 'src/permissions/permissions.service';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

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
      Level

    ]),
  ],
  providers: [LevelsService, StudentsService, PermissionsService, GroupService]
})
export class StudentsModule { }
