import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SommaireExercice } from "./SommaireExercice.entity";

@Entity("SommaireFinNiveau", { schema: "skiv2" })
export class SommaireFinNiveau {
  @PrimaryGeneratedColumn({ type: "int", name: "SommaireID" })
  sommaireId: number;

  @Column("int", { name: "StudentID" })
  studentId: number;

  @Column("int", { name: "LevelID" })
  levelId: number;

  @Column("int", { name: "EmployeID" })
  employeId: number;

  @Column("int", { name: "CompletionStatus" })
  completionStatus: number;

  @OneToMany(
    () => SommaireExercice,
    (sommaireExercice) => sommaireExercice.sommaire
  )
  sommaireExercices: SommaireExercice[];
}
