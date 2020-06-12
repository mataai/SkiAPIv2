import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("StudentGroupHistoryOld", { schema: "skiv2" })
export class StudentGroupHistoryOld {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "GroupID" })
  groupId: number;

  @Column("int", { name: "StudentID" })
  studentId: number;

  @Column("int", { name: "Status", default: () => "'0'" })
  status: number;

  @Column("datetime", { name: "Timestamp", default: () => "CURRENT_TIMESTAMP" })
  timestamp: Date;
}
