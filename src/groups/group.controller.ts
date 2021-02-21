/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, UseGuards, Param, UnauthorizedException, Req, Query } from '@nestjs/common';
import { GroupService } from './group.service';
import { Group } from 'src/entities/Group';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserDeco } from 'src/deocrators/user.decorator';
import { User } from 'src/entities/User';

@Controller('groups')
export class GroupController {

    constructor(private groupService: GroupService) {

    }


    @Get()
    @UseGuards(JwtAuthGuard)
    async Get(
        @UserDeco() user: User,
        @Req() req,
        @Query() query
    ): Promise<Group[]> {

        console.log(query);

        return this.groupService.getAll(user.userId, query)




    }

    // @Get("departement/:id")
    // @UseGuards(JwtAuthGuard)
    // GetByDeptID(@UserDeco() user, @Param() params): Promise<Group[]> {
    //     return this.groupService.getGroupsByDepart(user.userId, params.id,);
    // }


    @UseGuards(JwtAuthGuard)
    @Get("/:id")
    async GetByID(@UserDeco() user: any, @Param() params): Promise<Group> {
        let group = null;

        group = await this.groupService.getByID(user.userId, params.id);

        const studentsDTO = [];
        for (const grp of group.studentgroups) {
            const item = { ...grp, ...grp.student };
            delete item.student;
            studentsDTO.push(item)
        }
        group.studentgroups = studentsDTO;
        return group;
    }

}
