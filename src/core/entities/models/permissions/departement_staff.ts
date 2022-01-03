import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Departement } from '../../departement';
import { User } from '../../user';
import { Departementrole } from './departement_role';

@Index('IXFK_DepartementStaff_DepartementID', ['departementId'], {})
@Index('IXFK_DepartementStaff_UserID', ['userId'], {})
@Index('IXFK_DepartementStaff_RoleID', ['roleId'], {})
@Entity('DepartementStaff', { schema: 'ski' })
export class Departementstaff {
  @Column('int', { primary: true, name: 'UserID' })
  userId: number;

  @Column('int', { primary: true, name: 'DepartementID' })
  departementId: number;

  @Column('int', { name: 'RoleID' })
  roleId: number;

  @ManyToOne(
    () => Departementrole,
    departementrole => departementrole.departementstaffs,
    { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
  )
  @JoinColumn([{ name: 'RoleID', referencedColumnName: 'roleId' }])
  role: Departementrole;

  @ManyToOne(
    () => Departement,
    departement => departement.departementstaffs,
    { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
  )
  @JoinColumn([
    { name: 'DepartementID', referencedColumnName: 'departementId' },
  ])
  departement: Departement;

  @ManyToOne(
    () => User,
    user => user.departementstaffs,
    {
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    },
  )
  @JoinColumn([{ name: 'UserID', referencedColumnName: 'userId' }])
  user: User;
}
