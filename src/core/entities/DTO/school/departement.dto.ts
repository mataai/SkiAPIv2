import { DepartementPermissionRoleDto } from '../permissions/deparement_permissions_role.dto';
import { DepartementStaffDto } from '../permissions/departement_staff.dto';
import { GroupDto } from './group.dto';
import { LevelDto } from '../levels/level.dto';

export class DepartementDto {
  departementId: number;
  departementName: string;
  limiteEtudiantsGroupe: number;
  levels: LevelDto[];
  departementpermissionroles: DepartementPermissionRoleDto[];
  departementstaffs: DepartementStaffDto[];
  groups: GroupDto[];
}
