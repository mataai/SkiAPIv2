import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("studentstatus", { schema: "ski" })
export class StudentStatus {
  @PrimaryGeneratedColumn({ type: "int", name: "StatusID" })
  statusId: number;

  @Column("varchar", { name: "Status", length: 50 })
  status: string;
}
