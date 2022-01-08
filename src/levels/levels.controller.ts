import { Controller, Get, Param } from '@nestjs/common';
import { Level } from '../core/entities/models';
import { GroupService } from '../groups/group.service';
import { LevelsService } from './levels.service';

@Controller('levels')
export class LevelsController {
  constructor(
    private levelsService: LevelsService,
    private groupService: GroupService,
  ) {}

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
