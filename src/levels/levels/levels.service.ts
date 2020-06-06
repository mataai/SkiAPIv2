
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Levels } from '../../entities/levels.entity';

@Injectable()
export class LevelsService {

    constructor(
        @InjectRepository(Levels)
        private levelsRepository: Repository<Levels>,
    ) { }

    findAll(): Promise<Levels[]> {
        return this.levelsRepository.find();
    }

    async findOne(id: string): Promise<Levels> {
        return this.levelsRepository.findOne({ where: { levelId: id }, relations: ["exercices"] });
    }

    async remove(id: string): Promise<void> {
        await this.levelsRepository.delete(id);
    }
}