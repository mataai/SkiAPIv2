import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("departementroles", { schema: "ski" })
export class DepartementRoles {
  @PrimaryGeneratedColumn({ type: "int", name: "RoleID" })
  roleId: number;

  @Column("varchar", { name: "RoleName", length: 50 })
  roleName: string;
}
