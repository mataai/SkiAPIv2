import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Departement } from "./Departement";
import { Exercice } from "./Exercice";
import { Group } from "./Group";

@Entity("level", { schema: "ski" })
export class Level {
  @PrimaryGeneratedColumn({ type: "int", name: "LevelID" })
  levelId: number;

  @Column("varchar", { name: "Name", length: 45 })
  name: string;

  @Column("varchar", { name: "Description", nullable: true, length: 45 })
  description: string | null;

  @Column("int", { name: "NextLevelID" })
  nextLevelId: number;

  @ManyToMany(() => Departement, (departement) => departement.levels)
  departements: Departement[];

  @OneToMany(() => Exercice, (exercice) => exercice.level)
  exercices: Exercice[];

  @OneToMany(() => Group, (group) => group.level)
  groups: Group[];
}
