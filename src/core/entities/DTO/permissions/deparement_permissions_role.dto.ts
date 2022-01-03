import { DepartementPermissionDto } from './deparement_permission.dto';
import { DepartementRoleDto } from './deparement_role.dto';
import { DepartementDto } from '../school/departement.dto';

export class DepartementPermissionRoleDto {
  permissionRoleId: number;
  departementId: number;
  permissionId: number;
  roleId: number;
  role: DepartementRoleDto;
  departement: DepartementDto;
  permission: DepartementPermissionDto;
}
