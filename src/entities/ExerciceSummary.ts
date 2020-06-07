import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { LevelSummary } from "./LevelSummary.entity";

@Index("fkIdx_119", ["sommaireId"], {})
@Entity("exercicessummary", { schema: "ski" })
export class ExerciceSummary {
  @Column("int", { primary: true, name: "SommaireID" })
  sommaireId: number;

  @Column("int", { primary: true, name: "ExerciceID" })
  exerciceId: number;

  @Column("int", { name: "CompletionStatus" })
  completionStatus: number;

  @ManyToOne(
    () => LevelSummary,
    (levelsummary) => levelsummary.exercicessummaries,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "SommaireID", referencedColumnName: "sommaireId" }])
  sommaire: LevelSummary;
}
