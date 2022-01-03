import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Departementrole } from "./departement_role";
import { Departement } from "../../departement";
import { Departementpermission } from "./departement_permission";

@Index(
  "FK_Departement_PermissionRole_Departement_DepartementID",
  ["departementId"],
  {}
)
@Index(
  "FK_Departement_PermissionRole_DepartementPermission_PermissionID",
  ["permissionId"],
  {}
)
@Index("FK_Departement_PermissionRole_DepartementRole_RoleID", ["roleId"], {})
@Entity("DepartementPermissionRole", { schema: "ski" })
export class Departementpermissionrole {
  @PrimaryGeneratedColumn({ type: "int", name: "PermissionRoleID" })
  permissionRoleId: number;

  @Column("int", { name: "DepartementID" })
  departementId: number;

  @Column("int", { name: "PermissionID" })
  permissionId: number;

  @Column("int", { name: "RoleID" })
  roleId: number;

  @ManyToOne(
    () => Departementrole,
    (departementrole) => departementrole.departementpermissionroles,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "RoleID", referencedColumnName: "roleId" }])
  role: Departementrole;

  @ManyToOne(
    () => Departement,
    (departement) => departement.departementpermissionroles,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([
    { name: "DepartementID", referencedColumnName: "departementId" },
  ])
  departement: Departement;

  @ManyToOne(
    () => Departementpermission,
    (departementpermission) => departementpermission.departementpermissionroles,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "PermissionID", referencedColumnName: "permissionId" }])
  permission: Departementpermission;
}
