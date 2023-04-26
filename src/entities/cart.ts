import {Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {CartDetail} from "./cartDetail";
import {User} from "./user";


@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    status: boolean;
    @Column()
    date: number;
    @Column()
    totalMoney: number;
    @OneToMany(() => CartDetail,(cartDetail) => cartDetail.cart)
    cartDetails: CartDetail[];
    @ManyToOne(() => User,(user) => user.carts)
    user: User;
}