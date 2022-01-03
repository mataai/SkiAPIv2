import { GroupDto } from './group.dto';

export class EmployeDto {
  userId: number;
  firstName: string;
  lastName: string;
  password: string;
  departementstaffs: any[];
  groups: GroupDto[];
}
