import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Personnage } from '../../personnage/entities/personnage.entity';
import { Item } from '../../item/entities/item.entity';
import { Achievement } from '../../achievement/entities/achievement.entity';
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
  @OneToMany(() => Personnage, (personnages) => personnages.game, {
    cascade: true,
  })
  personnages: string[];

  @OneToMany(() => Item, (items) => items.game, {
    cascade: true,
  })
  items: string[];

  @OneToMany(() => Achievement, (achievements) => achievements.game)
  achievements: string[];

  @OneToOne(() => Statistic)
  @JoinColumn()
  statistic: string;
}
