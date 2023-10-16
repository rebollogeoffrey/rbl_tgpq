import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Personnage } from '../../personnage/entities/personnage.entity';
import { Item } from '../../item/entities/item.entity';
import { Statistic } from '../../statistic/entities/statistic.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 80,
    nullable: true,
    unique: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    unique: false,
  })
  description: string;

  @Column({
    type: 'bool',
    nullable: false,
    default: false,
  })
  isAccessible: boolean;

  @Column({
    type: 'int',
    default: 0,
  })
  nb_win: number;

  @Column({
    type: 'int',
    default: 0,
  })
  nb_lose: number;

  // --------------TIMESTAMPS
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;

  // --------------RELATIONS
  @OneToMany(() => Personnage, (personnages) => personnages.game)
  personnages: [Personnage];

  @OneToMany(() => Item, (items) => items.game)
  items: [Item];

  @OneToMany(() => Statistic, (statistics) => statistics.game)
  statistics: [Statistic];
}
