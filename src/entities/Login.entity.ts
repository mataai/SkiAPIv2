import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User.entity";

@Index("fkIdx_125", ["employeId"], {})
@Entity("logins", { schema: "ski" })
export class Login {
  @Column("int", { name: "EmployeID" })
  employeId: number;

  @Column("varchar", { name: "Token", length: 36 })
  token: string;

  @PrimaryGeneratedColumn({ type: "int", name: "LoginID" })
  loginId: number;

  @ManyToOne(() => User, (User) => User.logins, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "EmployeID", referencedColumnName: "employeId" }])
  employe: User;
}
