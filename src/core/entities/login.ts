import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user";

@Index("FkIdx_Login_UserID", ["userId"], {})
@Entity("Login", { schema: "ski" })
export class Login {
  @Column("int", { name: "UserID" })
  userId: number;

  @Column("varchar", { name: "Token", length: 36 })
  token: string;

  @PrimaryGeneratedColumn({ type: "int", name: "LoginID" })
  loginId: number;

  @ManyToOne(() => User, (user) => user.logins, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "UserID", referencedColumnName: "userId" }])
  user: User;
}
