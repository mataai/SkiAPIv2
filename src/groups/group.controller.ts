import { Controller, Get, UseGuards } from '@nestjs/common';
import { GroupService } from './group.service';
import { Group } from 'src/entities/Group';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('groups')
export class GroupController {

    constructor(private groupService: GroupService) {

    }


    @UseGuards(JwtAuthGuard)
    @Get()
    GetAll(): Promise<Group[]> {
        return this.groupService.getAll()
    }

    @UseGuards(JwtAuthGuard)
    @Get("/:id")
    GetByID(): Promise<Group[]> {
        return this.groupService.getGroupsByDepart(1, 114627);
    }
}
