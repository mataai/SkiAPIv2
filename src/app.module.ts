import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LevelsModule } from './levels/levels.module';
import { AuthModule } from './auth/auth.module';
import { GroupsModule } from './groups/groups.module';
import { UsersModule } from './users/users.module';

import { Level, Exercice } from '@core/entities/models';

import { Student } from './core/entities/student';
import { Studentgroup } from './core/entities/student_group';
import { User } from './core/entities/user';
import { Departement } from './core/entities/departement';
import { Departementpermissionrole } from './core/entities/models/permissions/departement_permission_role';
import { Login } from './core/entities/login';
import { DepartementModule } from './departement/departement.module';
import { DepartementService } from './departement/departement.service';
import { GroupService } from './groups/group.service';
import { StudentGroupHistory } from './core/entities/student_group_history';
import { Studentstatus } from './core/entities/student_status';
import { PermissionsModule } from './permissions/permissions.module';
import { PermissionsService } from './permissions/permissions.service';
import { LevelsService } from './levels/levels.service';
import { StudentsController } from './students/students.controller';
import { StudentsModule } from './students/students.module';
import { StudentsService } from './students/students.service';
import {
  Departementpermission,
  Departementrole,
  Departementstaff,
} from './core/entities/models/permissions';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.0.15',
      port: 3306,
      username: 'user',
      password: 'passw0rd',
      database: 'skiv2',
      entities: [
        Exercice,
        Level,
        Studentstatus,
        StudentGroupHistory,
        Group,
        Student,
        Studentgroup,
        User,
        Departement,
        Departementpermission,
        Departementpermissionrole,
        Departementstaff,
        Departementrole,
        Login,
      ],
      synchronize: true,
    }),
    LevelsModule,
    AuthModule,
    UsersModule,
    TypeOrmModule.forFeature([
      Exercice,
      Level,
      Studentstatus,
      StudentGroupHistory,
      Group,
      Student,
      Studentgroup,
      User,
      Departement,
      Departementpermission,
      Departementpermissionrole,
      Departementstaff,
      Departementrole,
      Login,
    ]),
    GroupsModule,
    DepartementModule,
    PermissionsModule,
    StudentsModule,
  ],
  controllers: [AppController, StudentsController],
  providers: [
    StudentsService,
    AppService,
    LevelsService,
    DepartementService,
    GroupService,
    PermissionsService,
  ],
})
export class AppModule {}
