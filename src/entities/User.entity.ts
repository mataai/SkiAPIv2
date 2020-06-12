import { Column, Entity, OneToMany } from "typeorm";
import { DepartementStaff } from "./DepartementStaff.entity";
import { Login } from "./Login.entity";

@Entity("User", { schema: "skiv2" })
export class User {
  @Column("int", { primary: true, name: "EmployeID" })
  employeId: number;

  @Column("varchar", { name: "FirstName", length: 45 })
  firstName: string;

  @Column("varchar", { name: "LastName", length: 45 })
  lastName: string;

  @Column("varchar", { name: "Password", length: 255 })
  password: string;

  @OneToMany(
    () => DepartementStaff,
    (departementStaff) => departementStaff.employe
  )
  departementStaffs: DepartementStaff[];

  @OneToMany(() => Login, (login) => login.employe)
  logins: Login[];
}
