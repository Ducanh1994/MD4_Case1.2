declare class ProductService {
    private productRepository;
    constructor();
    showAll: () => Promise<any>;
    addProduct: (product: any) => Promise<void>;
    editProduct: (id: any, product: any) => Promise<void>;
    removeProduct: (id: any) => Promise<void>;
}
declare const _default: ProductService;
export default _default;