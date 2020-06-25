/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, UseGuards, Post, Request, Param } from '@nestjs/common';
import { AppService } from './app.service';

import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UsersService } from './users/users.service';
import { DepartementService } from './departement/departement.service';
import { GroupService } from './groups/group.service';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private userService: UsersService,
    private groupService: GroupService,
    private deptService: DepartementService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("test")
  test() {
    return this.groupService.getGroupsByDepart(1, 114627);
    // return this.authService.getPerms(114627,1);
  }

  @UseGuards(JwtAuthGuard)
  @Get("search/:input")
  search(@Param() params): string {
    return params.input;
  }


}
