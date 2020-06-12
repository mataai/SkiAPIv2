import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Level } from "./Level.entity";
import { StudentGroup } from "./StudentGroup.entity";

@Index("FK_Groups_Levels_LevelID", ["levelId"], {})
@Entity("Group", { schema: "skiv2" })
export class Group {
  @PrimaryGeneratedColumn({ type: "int", name: "GroupID" })
  groupId: number;

  @Column("int", { name: "LevelID" })
  levelId: number;

  @Column("varchar", { name: "Number", length: 2 })
  number: string;

  @Column("time", { name: "Time" })
  time: string;

  @Column("int", { name: "Day" })
  day: number;

  @Column("varchar", {
    name: "TeacherName",
    nullable: true,
    length: 50,
    default: () => "' '",
  })
  teacherName: string;

  @Column("int", { name: "NbStudents", default: () => "'0'" })
  nbStudents: number;

  @Column("int", { name: "DepartementID" })
  departementId: number;

  @ManyToOne(() => Level, (level) => level.groups, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "LevelID", referencedColumnName: "levelId" }])
  level: Level;

  @OneToMany(() => StudentGroup, (studentGroup) => studentGroup.group)
  studentGroups: StudentGroup[];
}
