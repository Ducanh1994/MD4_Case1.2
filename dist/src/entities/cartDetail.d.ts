import { Cart } from "./cart";
import { Product } from "./product";
export declare class CartDetail {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
    cart: Cart;
    product: Product;
}
