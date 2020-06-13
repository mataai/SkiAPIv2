import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Level } from "./Level";
import { Departementpermissionrole } from "./Departementpermissionrole";
import { Departementstaff } from "./Departementstaff";
import { Group } from "./Group";

@Entity("departement", { schema: "ski" })
export class Departement {
  @PrimaryGeneratedColumn({ type: "int", name: "DepartementID" })
  departementId: number;

  @Column("varchar", { name: "DepartementName", length: 45 })
  departementName: string;

  @Column("int", { name: "LimiteEtudiantsGroupe" })
  limiteEtudiantsGroupe: number;

  @ManyToMany(() => Level, (level) => level.departements)
  @JoinTable({
    name: "departementniveau",
    joinColumns: [
      { name: "DepartementID", referencedColumnName: "departementId" },
    ],
    inverseJoinColumns: [{ name: "LevelID", referencedColumnName: "levelId" }],
    schema: "ski",
  })
  levels: Level[];

  @OneToMany(
    () => Departementpermissionrole,
    (departementpermissionrole) => departementpermissionrole.departement
  )
  departementpermissionroles: Departementpermissionrole[];

  @OneToMany(
    () => Departementstaff,
    (departementstaff) => departementstaff.departement
  )
  departementstaffs: Departementstaff[];

  @OneToMany(() => Group, (group) => group.departement)
  groups: Group[];
}
