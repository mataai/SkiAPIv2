import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Departementpermissionrole } from "./Departementpermissionrole";
import { Departementstaff } from "./Departementstaff";

@Entity("DepartementRole", { schema: "ski" })
export class Departementrole {
  @PrimaryGeneratedColumn({ type: "int", name: "RoleID" })
  roleId: number;

  @Column("varchar", { name: "RoleName", length: 50 })
  roleName: string;

  @OneToMany(
    () => Departementpermissionrole,
    (departementpermissionrole) => departementpermissionrole.role
  )
  departementpermissionroles: Departementpermissionrole[];

  @OneToMany(
    () => Departementstaff,
    (departementstaff) => departementstaff.role
  )
  departementstaffs: Departementstaff[];
}
