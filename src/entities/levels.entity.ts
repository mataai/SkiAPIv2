import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Exercices } from "./exercices.entity";
import { Groups } from "./groups.entity";

@Entity("levels", { schema: "ski" })
export class Levels {
  @PrimaryGeneratedColumn({ type: "int", name: "LevelID" })
  levelId: number;

  @Column("varchar", { name: "Name", length: 45 })
  name: string;

  @Column("varchar", { name: "Description", nullable: true, length: 45 })
  description: string | null;

  @OneToMany(() => Exercices, (exercices) => exercices.level)
  exercices: Exercices[];

  @OneToMany(() => Groups, (groups) => groups.level)
  groups: Groups[];
}
