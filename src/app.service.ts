import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Like, Repository } from 'typeorm';
import { Student } from './core/entities/student';
import { Studentgroup } from './core/entities/student_group';
import { User } from './core/entities/user';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Studentgroup)
    private studentGrpRepository: Repository<Studentgroup>,
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  getHello(): string {
    return 'Hello Bro!';
  }

  async search(input: string): Promise<any[]> {
    let output = [];
    const students = await this.studentRepository.find({
      where: [
        { firstName: Like('%' + input + '%') },
        { lastName: Like('%' + input + '%') },
        { phone: Like('%' + input + '%') },
      ],
    });

    if (students.length > 0) {
      const studentIds = students.map(x => x.studentId);
      const temp = await this.studentGrpRepository.find({
        where: [{ studentId: In(studentIds) }],
        relations: ['group', 'group.teacher', 'student'],
      });
      temp.forEach(element => {
        output.push({ ...element, ...element.student });
      });
    }
    const test = await this.usersRepository.findOne({
      where: [{ userId: Like(input + '%') }],
      relations: ['groups.teacher', 'groups'],
    });
    console.log(test);

    if (test) {
      output = output.concat(test.groups);
    }

    output.map(x => delete x.student);
    console.log('ici');

    console.log(output);

    return output;
  }
}
