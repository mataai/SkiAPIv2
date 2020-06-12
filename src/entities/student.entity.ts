import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StudentGroup } from "./StudentGroup.entity";

@Entity("Student", { schema: "skiv2" })
export class Student {
  @PrimaryGeneratedColumn({ type: "int", name: "StudentID" })
  studentId: number;

  @Column("varchar", { name: "Name", length: 45 })
  name: string;

  @Column("varchar", { name: "FirstName", length: 45 })
  firstName: string;

  @OneToMany(() => StudentGroup, (studentGroup) => studentGroup.student)
  studentGroups: StudentGroup[];
}
