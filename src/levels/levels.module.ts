import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LevelsService } from './levels.service';
import { LevelsController } from './levels.controller';
import { Level } from 'src/entities/Level';

@Module({
    imports: [TypeOrmModule.forFeature([Level])],
    providers: [LevelsService],
    controllers: [LevelsController]
})
export class LevelsModule { }
