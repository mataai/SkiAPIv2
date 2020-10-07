import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
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

    async findOne(id: number): Promise<Level> {
        return this.levelsRepository.findOne({ where: { levelId: id }, relations: ["exercices"] });
    }

    async findMany(levelIds: number[]) {
        return this.levelsRepository.find({ where: { levelId: In(levelIds) } })
    }

    async getNextLevel(ID: number): Promise<number> {
        return (await this.levelsRepository.findOne({ where: { levelId: ID } })).nextLevelId
    }

    async getPrevLevel(ID: number): Promise<number> {
        return (await this.levelsRepository.findOne({ where: { nextLevelIdr: ID } })).levelId
    }

    async getDepts(levelId: number) {
        return (await this.levelsRepository.findOne({ where: { levelId: levelId },relations: ["departements"] })).departements;
    }
}