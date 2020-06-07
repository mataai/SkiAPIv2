import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Level } from '../entities/Level.entity';

@Injectable()
export class LevelsService {

    constructor(
        @InjectRepository(Level)
        private levelsRepository: Repository<Level>,
    ) { }

    findAll(): Promise<Level[]> {
        return this.levelsRepository.find();
    }

    async findOne(id: string): Promise<Level> {
        return this.levelsRepository.findOne({ where: { levelId: id }, relations: ["exercices"] });
    }

    async remove(id: string): Promise<void> {
        await this.levelsRepository.delete(id);
    }
}