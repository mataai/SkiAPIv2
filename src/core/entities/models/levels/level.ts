import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exercice } from './exercice';
import { Departement } from '../../departement';
import { Group } from '../../group';

@Entity('Level', { schema: 'ski' })
export class Level {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    () => Departement,
    departement => departement.levels,
  )
  departements: Departement[];

  @OneToMany(
    () => Exercice,
    exercice => exercice.level,
  )
  exercices: Exercice[];

  @Column()
  description?: string;

  @Column()
  nextLevel?: Level;

  @OneToMany(
    () => Group,
    group => group.level,
  )
  groups?: Group[];

  constructor(
    id: number,
    name: string,
    departements: Departement[],
    exercices: Exercice[],
    groups?: Group[],
    description?: string,
    nextLevel?: Level,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.nextLevel = nextLevel;
    this.departements = departements;
    this.exercices = exercices;
    this.groups = groups;
  }
}
