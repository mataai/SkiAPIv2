import { Column, Entity, OneToMany } from "typeorm";
import { Departementstaff } from "./Departementstaff";
import { Group } from "./Group";
import { Login } from "./Login";

@Entity("User", { schema: "ski" })
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

  @OneToMany(() => Group, (group) => group.teacher)
  groups: Group[];

  @OneToMany(() => Login, (login) => login.user)
  logins: Login[];
}
