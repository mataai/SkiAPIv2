import { User } from '../../user';
import { DepartementStaffDto } from '../permissions/departement_staff.dto';
import { GroupDto } from '../school/group.dto';

export class UserDto {
  userId: number;
  firstName: string;
  lastName: string;
  departements?: DepartementStaffDto[];
  groups?: GroupDto[];

  constructor(user: User) {
    this.userId = user.userId;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }
}
