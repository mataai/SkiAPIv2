import { Column, Entity, OneToMany } from "typeorm";
import { Departementstaff } from "./Departementstaff";
import { Login } from "./Login";

@Entity("user", { schema: "ski" })
export class User {
  @Column("int", { primary: true, name: "UserID" })
  userId: number;

  @Column("varchar", { name: "FirstName", length: 45 })
  firstName: string;

  @Column("varchar", { name: "LastName", length: 45 })
  lastName: string;

  @Column("varchar", { name: "Password", length: 255 })
  password: string;

  @OneToMany(
    () => Departementstaff,
    (departementstaff) => departementstaff.user
  )
  departementstaffs: Departementstaff[];

  @OneToMany(() => Login, (login) => login.user)
  logins: Login[];
}
