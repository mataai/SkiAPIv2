import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LevelsModule } from './levels/levels.module';
import { AuthModule } from './auth/auth.module';
import { GroupsModule } from './groups/groups.module';
import { UsersModule } from './users/users.module';

import { Exercice } from './entities/Exercice.entity'
import { Level } from './entities/Level.entity'
import { Group } from './entities/Group.entity'
import { Student } from './entities/Student.entity';
import { StudentGroup } from './entities/StudentGroup.entity';
import { User } from './entities/User.entity';
import { Departement } from './entities/Departement.entity';
import { DepartementPermission } from './entities/DepartementPermission.entity';
import { DepartementPermissionsRole } from './entities/DepartementPermissionsRole.entity';
import { DepartementStaff } from './entities/DepartementStaff.entity';
import { Login } from './entities/Login.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'Ski',
      entities: [Exercice, Level, Group, Student, StudentGroup, User, Departement, DepartementPermission, DepartementPermissionsRole, DepartementStaff, Login],
      synchronize: true,
    }),
    LevelsModule,
    AuthModule,
    UsersModule,
    TypeOrmModule.forFeature([Group]),
    GroupsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
