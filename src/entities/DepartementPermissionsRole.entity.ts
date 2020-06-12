import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("DepartementPermissionsRole", { schema: "skiv2" })
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
