import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Departement } from "./Departement.entity";
import { Exercice } from "./Exercice.entity";
import { Group } from "./Group.entity";

@Entity("levels", { schema: "ski" })
export class Level {
  @PrimaryGeneratedColumn({ type: "int", name: "LevelID" })
  levelId: number;

  @Column("varchar", { name: "Name", length: 45 })
  name: string;

  @Column("varchar", { name: "Description", nullable: true, length: 45 })
  description: string | null;

  @ManyToMany(() => Departement, (departement) => departement.levels)
  departements: Departement[];

  @OneToMany(() => Exercice, (exercices) => exercices.level)
  exercices: Exercice[];

  @OneToMany(() => Group, (groups) => groups.level)
  groups: Group[];
}
