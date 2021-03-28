/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Post, UseGuards, Get, Request, Res, HttpStatus } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { ProfileDTO } from 'src/entities/DTO/ProfileDTO';
import { PermissionsService } from 'src/permissions/permissions.service';
import { UserDeco } from 'src/deocrators/user.decorator';
import { User } from 'src/entities/User';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService,
        private userService: UsersService,
        private permsService: PermissionsService) { }

    @Post('login')
    async login(@Request() req, @Res() res) {        
        const output = await this.authService.login(req.body);
        if (output) {
            res.send(output);
        }
        else {
            res.status(HttpStatus.UNAUTHORIZED).send("FUCK YOU kek /s ");
        }
    }

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    async getProfile(@Request() req, @UserDeco() user: User) {
        const roles = await this.userService.getRoles(user.userId.toString());
        return new ProfileDTO(user, roles);
    }
}
