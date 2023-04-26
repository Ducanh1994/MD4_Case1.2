import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Cart} from "./cart";
import {Product} from "./product";

@Entity()
export class CartDetail {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type:'varchar'})
    name: string;
    @Column()
    price: number;
    @Column()
    quantity: number;
    @Column()
    total: number;
    @ManyToOne(() => Cart,(cart) => cart.cartDetails)
    cart: Cart;
    @ManyToOne(() => Product,(product) => product.cartDetails)
    product: Product;
}