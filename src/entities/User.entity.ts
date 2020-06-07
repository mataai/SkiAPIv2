import { Column, Entity, OneToMany } from "typeorm";
import { DepartementStaff } from "./DepartementStaff.entity";
import { Login } from "./Login.entity";

@Entity("users", { schema: "ski" })
export class User {
  @Column("int", { primary: true, name: "EmployeID" })
  employeId: number;

  @Column("varchar", { name: "firstName", length: 45 })
  firstName: string;

  @Column("varchar", { name: "lastName", length: 45 })
  lastName: string;

  @Column("varchar", { name: "Password", length: 255 })
  password: string;

  @OneToMany(
    () => DepartementStaff,
    (departementstaff) => departementstaff.employe
  )
  departementstaffs: DepartementStaff[];

  @OneToMany(() => Login, (logins) => logins.employe)
  logins: Login[];
}
