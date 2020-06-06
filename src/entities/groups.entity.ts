import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Levels } from "./levels.entity";
import { Student } from "./student.entity";

@Index("FK_Groups_Levels_LevelID", ["levelId"], {})
@Entity("groups", { schema: "ski" })
export class Groups {
  @PrimaryGeneratedColumn({ type: "int", name: "GroupID" })
  groupId: number;

  @Column("int", { name: "LevelID" })
  levelId: number;

  @Column("varchar", { name: "Number", length: 2 })
  number: string;

  @Column("time", { name: "Time" })
  time: string;

  @ManyToOne(() => Levels, (levels) => levels.groups, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "LevelID", referencedColumnName: "levelId" }])
  level: Levels;

  
}
