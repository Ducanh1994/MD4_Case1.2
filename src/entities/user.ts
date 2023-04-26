import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Cart} from "./cart";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    password: string;
    @OneToMany(() => Cart,(cart) => cart.user)
    carts: Cart[]

}