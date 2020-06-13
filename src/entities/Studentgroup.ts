import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Group } from "./Group";
import { Student } from "./Student";

@Index("FkIdx_StudentGroup_GroupID", ["groupId"], {})
@Index("FkIdx_StudentGroup_StudentID", ["studentId"], {})
@Entity("studentgroup", { schema: "ski" })
export class Studentgroup {
  @Column("int", { primary: true, name: "GroupID" })
  groupId: number;

  @Column("int", { primary: true, name: "StudentID" })
  studentId: number;

  @Column("int", { name: "Status", default: () => "'0'" })
  status: number;

  @Column("varchar", { name: "Special", nullable: true, length: 255 })
  special: string | null;

  @ManyToOne(() => Group, (group) => group.studentgroups, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "GroupID", referencedColumnName: "groupId" }])
  group: Group;

  @ManyToOne(() => Student, (student) => student.studentgroups, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "StudentID", referencedColumnName: "studentId" }])
  student: Student;
}
