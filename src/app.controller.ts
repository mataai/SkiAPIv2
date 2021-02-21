/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, UseGuards, Req, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';

import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { GroupService } from './groups/group.service';
import { ExtractJwt } from 'passport-jwt';
import { Request } from 'express';
import { StudentsService } from './students/students.service';
import { UserDeco } from './deocrators/user.decorator';


@Controller()
export class AppController {
  constructor(
    private groupService: GroupService,
    private studentService: StudentsService,
    private appService: AppService) { }

  @Get()
  getHello() {
    // return this.groupService.getGroupsByLevel(1, 114627);
  }

  @Get("test")
  async test(@Req() req: Request) {
    console.log(req.user);
    const test = ExtractJwt.fromAuthHeaderAsBearerToken()

    return this.groupService.getAll(114627);

  }



  @UseGuards(JwtAuthGuard)
  @Put("status/:studentID")
  status(@UserDeco() user, @Param() params, @Req() req: Request) {
    console.log(params);
    console.log(req.body.status);
    this.studentService.setStatus(user.userId, params["studentID"], req.body.status);
    return { "resp": "ok" };
  }

  @UseGuards(JwtAuthGuard)
  @Get("search/:input")
  search(@Param() params) {
    console.log(params);

    return this.appService.search(params.input);
  }


}
