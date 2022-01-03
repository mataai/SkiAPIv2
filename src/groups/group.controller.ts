/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  Controller,
  Get,
  UseGuards,
  Param,
  UnauthorizedException,
  Req,
  Query,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { Group } from 'src/core/entities/group';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserDeco } from 'src/core/deocrators/user.decorator';
import { User } from 'src/core/entities/user';

@Controller('groups')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async Get(
    @UserDeco() user: User,
    @Req() req,
    @Query() query,
  ): Promise<Group[]> {
    return this.groupService.getAll(user.userId, query);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async GetByID(@UserDeco() user: any, @Param() params): Promise<Group> {
    let group = null;

    group = await this.groupService.getAll(
      user.userId,
      { groupId: params.id },
      true,
    );

    const studentsDTO = [];
    console.log(group);

    try {
      for (const grp of group.studentgroups) {
        const item = { ...grp, ...grp.student };
        delete item.student;
        studentsDTO.push(item);
      }
      group.studentgroups = studentsDTO;
    } catch (e) {}
    return group;
  }
}
