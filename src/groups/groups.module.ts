import { Module } from '@nestjs/common';

import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { TypeOrmModule } from '@nestjs/typeorm';


import { Group } from 'src/entities/Group';
import { Studentgroup } from 'src/entities/Studentgroup';
import { Departement } from 'src/entities/Departement';

@Module({
  imports: [
    TypeOrmModule.forFeature([Group,Studentgroup]),
  ],
  controllers: [GroupController],
  providers: [GroupService]
})
export class GroupsModule { }
