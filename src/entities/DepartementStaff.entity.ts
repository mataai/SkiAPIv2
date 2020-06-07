import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Departement } from "./Departement.entity";
import { User } from "./User.entity";

@Index("fkIdx_72", ["departementId"], {})
@Index("fkIdx_78", ["employeId"], {})
@Entity("departementstaff", { schema: "ski" })
export class DepartementStaff {
  @Column("int", { primary: true, name: "EmployeID" })
  employeId: number;

  @Column("int", { name: "permission" })
  permission: number;

  @Column("int", { primary: true, name: "departementID" })
  departementId: number;

  @ManyToOne(
    () => Departement,
    (departement) => departement.departementstaffs,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([
    { name: "departementID", referencedColumnName: "departementId" },
  ])
  departement: Departement;

  @ManyToOne(() => User, (user) => user.departementstaffs, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "EmployeID", referencedColumnName: "employeId" }])
  employe: User;
}
