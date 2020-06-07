
import { Injectable } from '@nestjs/common';
import { Level } from 'src/entities/Level.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity'


@Injectable()
export class UsersService {

    private readonly users: User[];

    constructor(
        @InjectRepository(Level)
        private usersRepository: Repository<User>,
    ) { }


    async findAll(): Promise<User[] | undefined> {
        return this.usersRepository.find();
    }

    async findOne(ID: number): Promise<User | undefined> {
        return this.usersRepository.findOne({ where: { employeId: ID } });
    }
}