import { DepartementRoleDto } from './deparement_role.dto';
import { DepartementDto } from '../school/departement.dto';
import { UserDto } from '../auth/user.dto';

export class DepartementStaffDto {
  userId: number;
  departementId: number;
  roleId: number;
  role: DepartementRoleDto;
  departement: DepartementDto;
  user: UserDto;
}
