import { DepartementPermissionRoleDto } from './deparement_permissions_role.dto';

export class DepartementPermissionDto {
  permissionId: number;
  permissionName: string;
  permissionDescription: string;
  departementpermissionroles: DepartementPermissionRoleDto[];
}
