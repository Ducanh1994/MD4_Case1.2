import { Category } from './category';
import { CartDetail } from "./cartDetail";
export declare class Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    category: Category;
    cartDetails: CartDetail[];
}
