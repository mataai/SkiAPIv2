/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, UseGuards, Param, Req, Query } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserDeco } from '../core/deocrators/user.decorator';
import { User } from '../core/entities';
import { Group } from '../core/entities/group';
import { GroupService } from './group.service';

@Controller('groups')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async Get(
    @UserDeco() user: User,
    @Req() req: any,
    @Query() query: any,
  ): Promise<Group[]> {
    return this.groupService.getAll(user.userId, query);
  }

  // todo wtf was this
  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async GetByID(@UserDeco() user: any, @Param() params: any): Promise<Group> {
    const group = await this.groupService.getAll(
      user.userId,
      { groupId: params.id },
      true,
    );

    const studentsDTO = [];
    console.log(group);

    // try {
    //   for (const grp of group.studentgroups) {
    //     const item = { ...grp, ...grp.student };
    //     delete item.student;
    //     studentsDTO.push(item);
    //   }
    //   group.studentgroups = studentsDTO;
    // } catch (e) {}
    return group[0];
  }
}
