/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Post, UseGuards, Get, Request } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';
import { TestGuard } from './guards/test.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.body);
    }

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    @UseGuards(TestGuard)
    getProfile(@Request() req) {
        return req.user;
    }
}
