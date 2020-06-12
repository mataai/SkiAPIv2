import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Departement } from "./Departement.entity";
import { User } from "./User.entity";
import { DepartementRole } from "./DepartementRole.entity";

@Index("fkIdx_72", ["departementId"], {})
@Index("fkIdx_78", ["employeId"], {})
@Index("FK_DepartementStaff_RoleID", ["roleId"], {})
@Entity("DepartementStaff", { schema: "skiv2" })
export class DepartementStaff {
  @Column("int", { primary: true, name: "EmployeID" })
  employeId: number;

  @Column("int", { primary: true, name: "DepartementID" })
  departementId: number;

  @Column("int", { name: "RoleID" })
  roleId: number;

  @ManyToOne(
    () => Departement,
    (departement) => departement.departementStaffs,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([
    { name: "DepartementID", referencedColumnName: "departementId" },
  ])
  departement: Departement;

  @ManyToOne(() => User, (user) => user.departementStaffs, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "EmployeID", referencedColumnName: "employeId" }])
  employe: User;

  @ManyToOne(
    () => DepartementRole,
    (departementRole) => departementRole.departementStaffs,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "RoleID", referencedColumnName: "roleId" }])
  role: DepartementRole;
}
