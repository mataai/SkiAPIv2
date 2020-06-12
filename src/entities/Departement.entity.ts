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

@Entity("Departement", { schema: "skiv2" })
export class Departement {
  @PrimaryGeneratedColumn({ type: "int", name: "DepartementID" })
  departementId: number;

  @Column("varchar", { name: "DepartementName", length: 45 })
  departementName: string;

  @Column("int", { name: "LimiteEtudiantsGroupe" })
  limiteEtudiantsGroupe: number;

  @ManyToMany(() => Level, (level) => level.departements)
  @JoinTable({
    name: "DepartementNiveau",
    joinColumns: [
      { name: "departementID", referencedColumnName: "departementId" },
    ],
    inverseJoinColumns: [{ name: "LevelID", referencedColumnName: "levelId" }],
    schema: "skiv2",
  })
  levels: Level[];

  @OneToMany(
    () => DepartementStaff,
    (departementStaff) => departementStaff.departement
  )
  departementStaffs: DepartementStaff[];
}
