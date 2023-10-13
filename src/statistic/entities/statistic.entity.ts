import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Game } from '../../game/entities/game.entity';
import { Historic } from '../../historic/entities/historic.entity';

@Entity()
export class Statistic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  nb_win: number;

  @Column({
    type: 'int',
    nullable: false,
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
  @OneToOne(() => Game, { cascade: false })
  @JoinColumn()
  game: string;

  @OneToMany(() => Historic, (historics) => historics.statistic)
  historics: [string];
}
