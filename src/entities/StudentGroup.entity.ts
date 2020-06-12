import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Group } from "./Group.entity";
import { Student } from "./Student.entity";

@Index("fkIdx_43", ["groupId"], {})
@Index("fkIdx_46", ["studentId"], {})
@Entity("StudentGroup", { schema: "skiv2" })
export class StudentGroup {
  @Column("int", { primary: true, name: "GroupID" })
  groupId: number;

  @Column("int", { primary: true, name: "StudentID" })
  studentId: number;

  @Column("int", { name: "Status", default: () => "'0'" })
  status: number;

  @Column("varchar", { name: "Special", nullable: true, length: 255 })
  special: string;

  @ManyToOne(() => Group, (group) => group.studentGroups, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "GroupID", referencedColumnName: "groupId" }])
  group: Group;

  @ManyToOne(() => Student, (student) => student.studentGroups, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "StudentID", referencedColumnName: "studentId" }])
  student: Student;
}
