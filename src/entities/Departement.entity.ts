import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Level } from "./Level.entity";
import { DepartementStaff } from "./DepartementStaff.entity";

@Entity("departement", { schema: "ski" })
export class Departement {
  @PrimaryGeneratedColumn({ type: "int", name: "departementID" })
  departementId: number;

  @Column("varchar", { name: "departementName", length: 45 })
  departementName: string;

  @Column("int", { name: "LimiteEtudiantsGroupe" })
  limiteEtudiantsGroupe: number;

  @ManyToMany(() => Level, (levels) => levels.departements)
  @JoinTable({
    name: "departementniveau",
    joinColumns: [
      { name: "departementID", referencedColumnName: "departementId" },
    ],
    inverseJoinColumns: [{ name: "LevelID", referencedColumnName: "levelId" }],
    schema: "ski",
  })
  levels: Level[];

  @OneToMany(
    () => DepartementStaff,
    (departementstaff) => departementstaff.departement
  )
  departementstaffs: DepartementStaff[];
}
