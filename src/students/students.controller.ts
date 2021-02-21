import { Controller, Get, Param, Query, Req, UseGuards } from '@nestjs/common';
import { ExtractJwt } from 'passport-jwt';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserDeco } from 'src/deocrators/user.decorator';
import { Student } from 'src/entities/DTO/DTO';
import { User } from 'src/entities/User';
import { QueryPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {

    /**
     *
     */
    constructor(
        private studentService: StudentsService,) {

    }

    @Get()
    @UseGuards(JwtAuthGuard)
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    Get(
        @UserDeco() user: User,
        @Req() req,
        @Query() query
    ): Student[] {
        const test = [{ "a": 1 }, { "a": "b" }, { "a": "c" }, { "a": "d" }, { "a": "e" }, { "a": "f" },]

        console.log(test.filter(x => !query.level || x.a == query.level));

        return this.studentService.getAll(user.userId, req.params)
    }

    @Get(":id")
    get(@UserDeco() user: User, @Param() params: { id: number }): boolean {
        console.log(user);
        console.log(params.id);

        const test = ExtractJwt.fromAuthHeaderAsBearerToken()

        return true;

    }

}
