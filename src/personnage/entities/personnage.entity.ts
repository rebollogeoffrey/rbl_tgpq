import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  // JoinColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Game } from '../../game/entities/game.entity';
import { Monster } from '../../monster/entities/monster.entity';
import { Item } from '../../item/entities/item.entity';

@Entity()
export class Personnage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 80,
    nullable: false,
    unique: false,
  })
  name: string;

  @Column({
    type: 'int',
    unique: false,
    nullable: true,
  })
  health_max: number;

  @Column({
    type: 'int',
    unique: false,
    nullable: true,
  })
  strength: number;

  @Column({
    type: 'int',
    unique: false,
    nullable: true,
  })
  dexterity: number;

  @Column({
    type: 'int',
    unique: false,
    nullable: true,
  })
  dodge: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    unique: false,
    default: 'You think : "Why does this only happen to me?!"',
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: false,
    nullable: true,
  })
  url_image: string;

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
  @ManyToOne(() => Game, (game) => game.personnages, { cascade: false })
  game: string;

  @OneToOne(() => Monster, { cascade: true })
  monster: string;

  // Hero is the join table between Item and Personnage
  // Hero has no property by itself except it's id
  @ManyToMany(() => Item, { cascade: false })
  @JoinTable({ name: 'hero' })
  items: string[];
}
