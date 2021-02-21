import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LevelsModule } from './levels/levels.module';
import { AuthModule } from './auth/auth.module';
import { GroupsModule } from './groups/groups.module';
import { UsersModule } from './users/users.module';

import { Exercice } from './entities/Exercice'
import { Level } from './entities/Level'
import { Group } from './entities/Group'
import { Student } from './entities/Student';
import { Studentgroup } from './entities/Studentgroup';
import { User } from './entities/User';
import { Departement } from './entities/Departement';
import { Departementpermission } from './entities/Departementpermission';
import { Departementpermissionrole } from './entities/Departementpermissionrole';
import { Departementstaff } from './entities/Departementstaff';
import { Login } from './entities/Login';
import { Departementrole } from './entities/Departementrole';
import { DepartementModule } from './departement/departement.module';
import { DepartementService } from './departement/departement.service';
import { GroupService } from './groups/group.service';
import { StudentGroupHistory } from './entities/Studentgrouphistory';
import { Studentstatus } from './entities/Studentstatus';
import { PermissionsModule } from './permissions/permissions.module';
import { PermissionsService } from './permissions/permissions.service';
import { LevelsService } from './levels/levels.service';
import { StudentsController } from './students/students.controller';
import { StudentsModule } from './students/students.module';
import { StudentsService } from './students/students.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'web.martin',
      port: 3306,
      username: 'user',
      password: 'passw0rd',
      database: 'skiv2',
      entities: [Studentstatus, StudentGroupHistory, Exercice, Level, Group, Student, Studentgroup, User, Departement, Departementpermission, Departementpermissionrole, Departementstaff, Departementrole, Login],
      synchronize: true,
    }),
    LevelsModule,
    AuthModule,
    UsersModule,
    TypeOrmModule.forFeature([Studentstatus, StudentGroupHistory, Exercice, Level, Group, Student, Studentgroup, User, Departement, Departementpermission, Departementpermissionrole, Departementstaff, Departementrole, Login]),
    GroupsModule,
    DepartementModule,
    PermissionsModule,
    StudentsModule
  ],
  controllers: [AppController, StudentsController],
  providers: [StudentsService, AppService, LevelsService, DepartementService, GroupService, PermissionsService],
})
export class AppModule { }
