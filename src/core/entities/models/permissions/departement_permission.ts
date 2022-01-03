import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Departementpermissionrole } from "./departement_permission_role";

@Entity("DepartementPermission", { schema: "ski" })
export class Departementpermission {
  @PrimaryGeneratedColumn({ type: "int", name: "PermissionID" })
  permissionId: number;

  @Column("varchar", { name: "PermissionName", length: 20 })
  permissionName: string;

  @Column("varchar", { name: "PermissionDescription", length: 255 })
  permissionDescription: string;

  @OneToMany(
    () => Departementpermissionrole,
    (departementpermissionrole) => departementpermissionrole.permission
  )
  departementpermissionroles: Departementpermissionrole[];
}
