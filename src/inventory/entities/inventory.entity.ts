import { Item } from "src/item/entities/item.entity";
import { Personnage } from "src/personnage/entities/personnage.entity";
import { Column, CreateDateColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Inventory {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'int',
        unique: false,
        default: 0,
    })
    gold: number;

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

    @ManyToMany(() => Item, (item) => item.inventories)
    @JoinTable()
    items: Item[];

    @ManyToOne(() => Personnage, (personnage) => personnage.inventories)
    personnage : Personnage;
}
