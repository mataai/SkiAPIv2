import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { LevelsService } from './levels.service';
import { Level } from '../entities/Level';
import { GroupService } from 'src/groups/group.service';
import { Group } from 'src/entities/Group';
import { User } from 'src/entities/User';
import { UserDeco } from 'src/deocrators/user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('levels')
export class LevelsController {

    constructor(private levelsService: LevelsService,
        private groupService: GroupService) { }


    @Get()
    GetAll(): Promise<Level[]> {

        return this.levelsService.findAll();
    }

    @Get(':id')
    GetOne(@Param() params: { id: number }): Promise<Level> {
        return this.levelsService.findOne(params.id);
    }

    // @Get(':id/groups')
    // @UseGuards(JwtAuthGuard)
    // GetGroups(@UserDeco() user: User, @Param() params: { id: number }): Promise<Group[]> {
    //     console.log(user);
    //     return this.groupService.getGroupsByLevel(user.userId, params.id);
    // }

}
