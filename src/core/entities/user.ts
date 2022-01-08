import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from './group';
import { Login } from './login';
import { Departementstaff } from './models/permissions';

@Entity('User', { schema: 'ski' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @OneToMany(
    () => Departementstaff,
    departementstaff => departementstaff.user,
  )
  departementstaffs: Departementstaff[];

  @OneToMany(
    () => Group,
    group => group.teacher,
  )
  groups: Group[];

  @OneToMany(
    () => Login,
    login => login.user,
  )
  logins: Login[];

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    password: string,
    departementstaffs: Departementstaff[],
    groups: Group[],
    logins: Login[],
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.departementstaffs = departementstaffs;
    this.groups = groups;
    this.logins = logins;
  }
}
