import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Sommairefinniveau } from "./sommaire_fin_niveau";

@Index("FkIdx_SommaireExercice_SommaireID", ["sommaireId"], {})
@Entity("SommaireExercice", { schema: "ski" })
export class Sommaireexercice {
  @Column("int", { primary: true, name: "SommaireID" })
  sommaireId: number;

  @Column("int", { primary: true, name: "ExerciceID" })
  exerciceId: number;

  @Column("int", { name: "CompletionStatus" })
  completionStatus: number;

  @ManyToOne(
    () => Sommairefinniveau,
    (sommairefinniveau) => sommairefinniveau.sommaireexercices,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "SommaireID", referencedColumnName: "sommaireId" }])
  sommaire: Sommairefinniveau;
}
