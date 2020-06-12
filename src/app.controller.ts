/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, UseGuards, Post, Request, Param } from '@nestjs/common';
import { AppService } from './app.service';

import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UsersService } from './users/users.service';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private authService: AuthService,
    private userService: UsersService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("test")
  test() {
    return this.appService.test();
  }

  @UseGuards(JwtAuthGuard)
  @Get("search/:input")
  search(@Param() params): string {
    return params.input;
  }


}
