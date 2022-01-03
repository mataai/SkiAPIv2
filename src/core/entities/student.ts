import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Studentgroup } from "./student_group";

@Entity("Student", { schema: "ski" })
export class Student {
  @PrimaryGeneratedColumn({ type: "int", name: "StudentID" })
  studentId: number;

  @Column("varchar", { name: "LastName", length: 45 })
  lastName: string;

  @Column("varchar", { name: "FirstName", length: 45 })
  firstName: string;

  @Column("bigint", { name: "Phone" })
  phone: number;

  @OneToMany(() => Studentgroup, (studentgroup) => studentgroup.student)
  studentgroups: Studentgroup[];
}
