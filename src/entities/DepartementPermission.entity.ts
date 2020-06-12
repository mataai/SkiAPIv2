import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("DepartementPermission", { schema: "skiv2" })
export class DepartementPermission {
  @PrimaryGeneratedColumn({ type: "int", name: "PermissionID" })
  permissionId: number;

  @Column("varchar", { name: "PermissionName", length: 20 })
  permissionName: string;

  @Column("varchar", { name: "PermissionDescription", length: 255 })
  permissionDescription: string;
}
