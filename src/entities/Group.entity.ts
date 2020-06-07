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
@Entity("groups", { schema: "ski" })
export class Group {
  @PrimaryGeneratedColumn({ type: "int", name: "GroupID" })
  groupId: number;

  @Column("int", { name: "LevelID" })
  levelId: number;

  @Column("varchar", { name: "Number", length: 2 })
  number: string;

  @Column("time", { name: "Time" })
  time: string;

  @ManyToOne(() => Level, (levels) => levels.groups, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })

  @JoinColumn([{ name: "LevelID", referencedColumnName: "levelId" }])
  level: Level;

  @OneToMany(() => StudentGroup, (studentgroup) => studentgroup.group)
  students: StudentGroup[];
}
