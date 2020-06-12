import { Module } from '@nestjs/common';

import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { TypeOrmModule } from '@nestjs/typeorm';


import { Group } from 'src/entities/Group.entity';
import { StudentGroup } from 'src/entities/StudentGroup.entity';
import { Departement } from 'src/entities/Departement.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Group,StudentGroup]),
  ],
  controllers: [GroupController],
  providers: [GroupService]
})
export class GroupsModule { }
