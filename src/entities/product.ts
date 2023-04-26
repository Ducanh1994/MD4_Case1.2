import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Category} from './category';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type:'varchar'})
    name: string;
    @Column()
    price: number;
    @Column()
    quantity: number;
    @ManyToOne(() => Category,(category) => category.products)
    category: Category;
}