import { Controller, Get, Param } from '@nestjs/common';
import { LevelsService } from './levels.service';
import { Level } from '../entities/Level.entity';

@Controller('levels')
export class LevelsController {


    constructor(private levelsService: LevelsService) { }

    @Get()
    GetAll(): Promise<Level[]> {
        return this.levelsService.findAll();
    }

    @Get(':id')
    GetOne(@Param() params): Promise<Level> {
        return this.levelsService.findOne(params.id);
    }
}
