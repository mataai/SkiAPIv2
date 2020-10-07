import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("StudentGroupHistory", { schema: "ski" })
export class StudentGroupHistory {
  
  @PrimaryGeneratedColumn({ type: "int", name: "HistoryID" })
  historyId: number;

  @Column("int", { name: "OldGroup" })
  oldGroup: number;

  @Column("int", { name: "NewGroup" })
  newGroup: number;

  @Column("int", { name: "OldStatus" })
  oldStatus: number;

  @Column("int", { name: "NewStatus", nullable: true })
  newStatus: number | null;

  @Column("int", { name: "UserID" })
  userId: number;

  @Column("int", { name: "ClientID" })
  clientId: number;

  @Column("datetime", { name: "Date", default: () => "CURRENT_TIMESTAMP" })
  date: Date;
}
