import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { SommaireFinNiveau } from "./SommaireFinNiveau.entity";

@Index("fkIdx_119", ["sommaireId"], {})
@Entity("SommaireExercice", { schema: "skiv2" })
export class SommaireExercice {
  @Column("int", { primary: true, name: "SommaireID" })
  sommaireId: number;

  @Column("int", { primary: true, name: "ExerciceID" })
  exerciceId: number;

  @Column("int", { name: "CompletionStatus" })
  completionStatus: number;

  @ManyToOne(
    () => SommaireFinNiveau,
    (sommaireFinNiveau) => sommaireFinNiveau.sommaireExercices,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "SommaireID", referencedColumnName: "sommaireId" }])
  sommaire: SommaireFinNiveau;
}
