import { Controller, Get, Param } from '@nestjs/common';
import { LevelsService } from './levels.service';
import { Levels } from '../../entities/levels.entity';

@Controller('levels')
export class LevelsController {


    constructor(private levelsService: LevelsService) { }

    @Get()
    GetAll(): Promise<Levels[]> {
        return this.levelsService.findAll();
    }

    @Get(':id')
    GetOne(@Param() params): Promise<Levels> {
        return this.levelsService.findOne(params.id);
    }
}
