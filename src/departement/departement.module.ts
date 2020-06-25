import { Module } from '@nestjs/common';
import { DepartementController } from './departement.controller';
import { DepartementService } from './departement.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Group } from 'src/entities/Group';
import { Departement } from 'src/entities/Departement';
import { Departementpermission } from 'src/entities/Departementpermission';
import { User } from 'src/entities/User';
import { Departementstaff } from 'src/entities/Departementstaff';
import { Departementrole } from 'src/entities/Departementrole';
import { Departementpermissionrole } from 'src/entities/Departementpermissionrole';
import { Level } from 'src/entities/Level';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Departement, Group, Departementstaff, Departementpermission, Departementrole, Departementpermissionrole, Level]),
  ],
  controllers: [DepartementController],
  providers: [DepartementService]
})
export class DepartementModule { }
