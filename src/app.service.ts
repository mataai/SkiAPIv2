import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Group } from './entities/Group';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Group)
    private usersRepository: Repository<Group>,
  ) { }

  getHello(): string {
    return 'Hello Bro!';
  }
  
}
