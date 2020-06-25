import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Level } from '../entities/Level';

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

    async getNextLevel(ID: number): Promise<number> {
        return (await this.levelsRepository.findOne({ where: { levelId: ID } })).nextLevelId
    }

    async getPrevLevel(ID: number): Promise<number> {
        return (await this.levelsRepository.findOne({ where: { nextLevelIdr: ID } })).levelId
    }
}