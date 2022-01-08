import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Level } from './level';

@Entity('Exercice', { schema: 'ski' })
export class Exercice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  terrain: string;

  @Column()
  type: number;

  @ManyToOne(
    () => Level,
    level => level.exercices,
  )
  level: Level;

  constructor(
    id: number,
    description: string,
    terrain: string,
    type: number,
    level: Level,
  ) {
    this.id = id;
    this.description = description;
    this.terrain = terrain;
    this.type = type;
    this.level = level;
  }
}
