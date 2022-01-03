import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Departement } from "./departement";
import { Level } from "./level";
import { User } from "./user";
import { Studentgroup } from "./student_group";

@Index("IXFK_Groups_Levels_LevelID", ["levelId"], {})
@Index("FK_Groups_Departement_DepartementID", ["departementId"], {})
@Index("FK_Group_User_UserID", ["teacherId"], {})
@Entity("Group", { schema: "ski" })
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

  @Column("int", { name: "TeacherID", default: () => "'0'" })
  teacherId: number;

  @Column("int", { name: "NbStudents", default: () => "'0'" })
  nbStudents: number;

  @Column("int", { name: "DepartementID" })
  departementId: number;

  @ManyToOne(() => Departement, (departement) => departement.groups, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "DepartementID", referencedColumnName: "departementId" },
  ])
  departement: Departement;

  @ManyToOne(() => Level, (level) => level.groups, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "LevelID", referencedColumnName: "levelId" }])
  level: Level;

  @ManyToOne(() => User, (user) => user.groups, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "TeacherID", referencedColumnName: "userId" }])
  teacher: User;

  @OneToMany(() => Studentgroup, (studentgroup) => studentgroup.group)
  studentgroups: Studentgroup[];
}
