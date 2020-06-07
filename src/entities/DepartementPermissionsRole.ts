import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("departementpermissionsrole", { schema: "ski" })
export class DepartementPermissionsRole {
  @PrimaryGeneratedColumn({ type: "int", name: "PermissionRoleID" })
  permissionRoleId: number;

  @Column("int", { name: "DepartementID" })
  departementId: number;

  @Column("int", { name: "PermissionID" })
  permissionId: number;

  @Column("int", { name: "RoleID" })
  roleId: number;
}
