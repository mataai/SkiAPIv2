import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("StudentStatus", { schema: "skiv2" })
export class StudentStatus {
  @PrimaryGeneratedColumn({ type: "int", name: "StatusID" })
  statusId: number;

  @Column("varchar", { name: "Status", length: 50 })
  status: string;
}
