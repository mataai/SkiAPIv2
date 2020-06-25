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


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ski',
      entities: [Exercice, Level, Group, Student, Studentgroup, User, Departement, Departementpermission, Departementpermissionrole, Departementstaff, Departementrole, Login],
      synchronize: true,
    }),
    LevelsModule,
    AuthModule,
    UsersModule,
    TypeOrmModule.forFeature([Exercice, Level, Group, Student, Studentgroup, User, Departement, Departementpermission, Departementpermissionrole, Departementstaff, Departementrole, Login]),
    GroupsModule,
    DepartementModule
  ],
  controllers: [AppController],
  providers: [AppService, DepartementService, GroupService],
})
export class AppModule { }
