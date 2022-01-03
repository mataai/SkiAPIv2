import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Sommaireexercice } from "./sommaire_exercice";

@Entity("SommaireFinNiveau", { schema: "ski" })
export class Sommairefinniveau {
  @PrimaryGeneratedColumn({ type: "int", name: "SommaireID" })
  sommaireId: number;

  @Column("int", { name: "StudentID" })
  studentId: number;

  @Column("int", { name: "LevelID" })
  levelId: number;

  @Column("int", { name: "UserID" })
  userId: number;

  @Column("int", { name: "CompletionStatus" })
  completionStatus: number;

  @OneToMany(
    () => Sommaireexercice,
    (sommaireexercice) => sommaireexercice.sommaire
  )
  sommaireexercices: Sommaireexercice[];
}
