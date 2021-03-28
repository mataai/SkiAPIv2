import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LevelsService } from './levels.service';
import { LevelsController } from './levels.controller';
import { Level } from 'src/entities/Level';
import { GroupService } from 'src/groups/group.service';
import { Group } from 'src/entities/Group';
import { PermissionsService } from 'src/permissions/permissions.service';
import { Departementstaff } from 'src/entities/Departementstaff';
import { Departementpermissionrole } from 'src/entities/Departementpermissionrole';
import { Departementpermission } from 'src/entities/Departementpermission';

@Module({
    imports: [
        TypeOrmModule.forFeature([Level, Group, Departementstaff, Departementpermissionrole, Departementpermission]),
        
    ],
    providers: [LevelsService, GroupService, PermissionsService],
    controllers: [LevelsController]
})
export class LevelsModule { }
