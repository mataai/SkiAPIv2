import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Departement } from "./Departement";
import { Departementrole } from "./Departementrole";
import { User } from "./User";

@Index("FK_DepartementStaff_DepartementID", ["departementId"], {})
@Index("FK_DepartementStaff_UserID", ["userId"], {})
@Index("FK_DepartementStaff_RoleID", ["roleId"], {})
@Entity("departementstaff", { schema: "ski" })
export class Departementstaff {
  @Column("int", { primary: true, name: "UserID" })
  userId: number;

  @Column("int", { primary: true, name: "DepartementID" })
  departementId: number;

  @Column("int", { name: "RoleID" })
  roleId: number;

  @ManyToOne(
    () => Departement,
    (departement) => departement.departementstaffs,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([
    { name: "DepartementID", referencedColumnName: "departementId" },
  ])
  departement: Departement;

  @ManyToOne(
    () => Departementrole,
    (departementrole) => departementrole.departementstaffs,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "RoleID", referencedColumnName: "roleId" }])
  role: Departementrole;

  @ManyToOne(() => User, (user) => user.departementstaffs, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "UserID", referencedColumnName: "userId" }])
  user: User;
}
