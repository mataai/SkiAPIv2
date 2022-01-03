import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Level } from './level';
import { Departementpermissionrole } from './models/permissions/departement_permission_role';
import { Group } from './group';
import { Departementstaff } from './models/permissions';

@Entity('Departement', { schema: 'ski' })
export class Departement {
  @PrimaryGeneratedColumn({ type: 'int', name: 'DepartementID' })
  departementId: number;

  @Column('varchar', { name: 'DepartementName', length: 45 })
  departementName: string;

  @Column('int', { name: 'LimiteEtudiantsGroupe' })
  limiteEtudiantsGroupe: number;

  @ManyToMany(
    () => Level,
    level => level.departements,
  )
  levels: Level[];

  @OneToMany(
    () => Departementpermissionrole,
    departementpermissionrole => departementpermissionrole.departement,
  )
  departementpermissionroles: Departementpermissionrole[];

  @OneToMany(
    () => Departementstaff,
    departementstaff => departementstaff.departement,
  )
  departementstaffs: Departementstaff[];

  @OneToMany(
    () => Group,
    group => group.departement,
  )
  groups: Group[];
}
