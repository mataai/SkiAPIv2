import { DepartementDto } from './departement.dto';
import { LevelDto } from '../levels/level.dto';
import { StudentGroupDto } from './student_group.dto';
import { UserDto } from '../auth/user.dto';

export class GroupDto {
  groupId: number;
  levelId: number;
  number: string;
  time: string;
  day: number;
  teacherId: number;
  nbStudents: number;
  departementId: number;
  departement: DepartementDto;
  level: LevelDto;
  teacher: UserDto;
  studentgroups: StudentGroupDto[];
}
