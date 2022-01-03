import { GroupDto } from './group.dto';
import { StudentDto } from './student.dto';

export class StudentGroupDto {
  groupId: number;
  studentId: number;
  status: number;
  special?: string;
  student: StudentDto;
  group: GroupDto;
}
