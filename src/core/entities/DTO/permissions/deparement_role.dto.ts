import { DepartementPermissionRoleDto } from './deparement_permissions_role.dto';
import { DepartementStaffDto } from './departement_staff.dto';

export class DepartementRoleDto {
  roleId: number;
  roleName: string;
  departementpermissionroles: DepartementPermissionRoleDto[];
  departementstaffs: DepartementStaffDto[];
}
