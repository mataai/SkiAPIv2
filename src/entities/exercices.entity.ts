import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Levels } from "./levels.entity";

@Index("fkIdx_15", ["levelId"], {})
@Entity("exercices", { schema: "ski" })
export class Exercices {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "Description", length: 254 })
  description: string;

  @Column("varchar", { name: "Terrain", length: 45 })
  terrain: string;

  @Column("int", { name: "Type" })
  type: number;

  @Column("int", { name: "LevelID" })
  levelId: number;

  @ManyToOne(() => Levels, (levels) => levels.exercices, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "LevelID", referencedColumnName: "levelId" }])
  level: Levels;
}
