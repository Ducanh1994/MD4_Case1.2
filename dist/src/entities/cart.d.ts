import { CartDetail } from "./cartDetail";
import { User } from "./user";
export declare class Cart {
    id: number;
    status: boolean;
    date: number;
    totalMoney: number;
    cartDetails: CartDetail[];
    user: User;
}
