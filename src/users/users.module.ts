import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Level } from 'src/entities/Level.entity';
import { User } from 'src/entities/User.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Level, User])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule { }
