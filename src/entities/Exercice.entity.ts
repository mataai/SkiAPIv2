import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Level } from "./Level.entity";

@Index("fkIdx_15", ["levelId"], {})
@Entity("Exercice", { schema: "skiv2" })
export class Exercice {
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

  @ManyToOne(() => Level, (level) => level.exercices, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "LevelID", referencedColumnName: "levelId" }])
  level: Level;
}
