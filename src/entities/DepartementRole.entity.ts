import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DepartementStaff } from "./DepartementStaff.entity";

@Entity("DepartementRole", { schema: "skiv2" })
export class DepartementRole {
  @PrimaryGeneratedColumn({ type: "int", name: "RoleID" })
  roleId: number;

  @Column("varchar", { name: "RoleName", length: 50 })
  roleName: string;

  @OneToMany(
    () => DepartementStaff,
    (departementStaff) => departementStaff.role
  )
  departementStaffs: DepartementStaff[];
}
