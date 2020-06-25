
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';


import { User } from 'src/entities/User';
import { Departementstaff } from 'src/entities/Departementstaff';
import { Departementpermission } from 'src/entities/Departementpermission';
import { Departementrole } from 'src/entities/Departementrole';
import { Departementpermissionrole } from 'src/entities/Departementpermissionrole';
import { UsersService } from 'src/users/users.service';
import { LocalAuthGuard } from './local-auth.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Departementstaff, Departementpermission, Departementrole, Departementpermissionrole]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.duration },
    }),
  ],
  providers: [AuthService, UsersService, LocalStrategy, JwtStrategy, LocalAuthGuard],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule { }