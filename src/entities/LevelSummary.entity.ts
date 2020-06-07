import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ExerciceSummary } from "./ExerciceSummary";

@Entity("levelsummary", { schema: "ski" })
export class LevelSummary {
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
    () => ExerciceSummary,
    (exercicessummary) => exercicessummary.sommaire
  )
  exercicessummaries: ExerciceSummary[];
}
