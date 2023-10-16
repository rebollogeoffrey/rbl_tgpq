import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Game } from '../../game/entities/game.entity';
import { Statistic } from 'src/statistic/entities/statistic.entity';
import { Inventory } from 'src/inventory/entities/inventory.entity';

export enum Category {
  ANIMATE = 'Animate',
  BLOB = 'Blob',
  DEAMON = 'Daemon',
  ELEMENTAL = 'Elemental',
  GOLEM = 'Golem',
  HERO = 'Hero',
  MAGIC = 'Magic',
  MERCHANT = 'Merchant',
  PARTNER = 'Partner',
  PLANT = 'Plant',
  THIEF = 'Thief',
  UNDEAD = 'Undead',
  WOLF = 'Wolf',
}


@Entity()
export class Personnage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 80,
    nullable: false,
    unique: false,
    comment: "Personnage's name"
  })
  name: string;

  @Column({
    type: 'int',
    unique: false,
    nullable: true,
    comment : "Maximum health points this personage can have"
  })
  health_max: number;

  @Column({
    type: 'int',
    unique: false,
    nullable: true,
    comment: "Strength is used to calculate damage this personnage deal"
  })
  strength: number;

  @Column({
    type: 'int',
    unique: false,
    nullable: true,
    comment: "Dexterity is used to calculate chance to deal damage to an opponent"
  })
  dexterity: number;

  @Column({
    type: 'int',
    unique: false,
    nullable: true,
    comment: "Dodge is used to calculate chance to dodge an opponent's attack"
  })
  dodge: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    unique: false,
    comment: "This text appears on the loading screen for monsters and in selection for character"
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: false,
    nullable: true,
  })
  url_image: string;

  @Column({
    type: 'int',
    nullable: true,
    default: 1,
    comment: "Difficulty is used to sort personnage by their difficulty to be beaten"
  })
  difficulty: number;

  @Column({
    type: 'enum',
    nullable: false,
    comment: "Category of personnage"
  })
  category: Category;


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
  @ManyToOne(() => Game, (game) => game.personnages)
  game: Game;

  @ManyToOne(() => Statistic, (statistic) =>  statistic.personnages)
  statistic : Statistic;

  @OneToMany(() => Inventory, (inventory) => inventory.personnage)
  inventories : Inventory[];
}
