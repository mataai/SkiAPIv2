import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StudentGroup } from "./StudentGroup.entity";

@Entity("student", { schema: "ski" })
export class Student {
  @PrimaryGeneratedColumn({ type: "int", name: "StudentID" })
  studentId: number;

  @Column("varchar", { name: "Name", length: 45 })
  name: string;

  @Column("varchar", { name: "FirstName", length: 45 })
  firstName: string;

  @OneToMany(() => StudentGroup, (studentgroup) => studentgroup.student)
  studentgroups: StudentGroup[];
}
