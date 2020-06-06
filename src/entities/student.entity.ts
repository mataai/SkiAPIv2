import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Groups } from "./groups.entity";

@Entity("student", { schema: "ski" })
export class Student {
  @PrimaryGeneratedColumn({ type: "int", name: "StudentID" })
  studentId: number;

  @Column("varchar", { name: "Name", length: 45 })
  name: string;

  @Column("varchar", { name: "FirstName", length: 45 })
  firstName: string;

  @Column("varchar", { name: "Phone", length: 45 })
  phone: string;


}
