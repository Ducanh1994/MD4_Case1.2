import {Column, Entity,ManyToOne,OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Category} from './category';
import {CartDetail} from "./cartDetail";

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
    @OneToMany( () => CartDetail,(cartDetail) => cartDetail.product)
    cartDetails: CartDetail[];
}