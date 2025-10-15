import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  asset_id: number; // primary key

  @Column()
  asset_name: string;

  @Column()
  stock_quantity: string;

  @Column()
  category: 'Consumable' | 'Non-Consumable';
}
