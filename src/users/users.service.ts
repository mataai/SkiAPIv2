
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity'


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }


    async findAll(): Promise<User[] | undefined> {
        return this.usersRepository.find();
    }

    async findOne(ID: string): Promise<User | undefined> {
        return this.usersRepository.findOne({ where: { employeId: parseInt(ID) } });
    }


}