import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LevelsService } from './levels/levels.service';
import { LevelsController } from './levels/levels.controller';
import { Levels } from 'src/entities/levels.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Levels])],
    providers: [LevelsService],
    controllers: [LevelsController]
})
export class LevelsModule { }
