"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../services/productService"));
class ProductController {
    constructor() {
        this.showProduct = async (req, res) => {
            console.log("show Product");
            const listProduct = await productService_1.default.showAll();
            res.status(200).json(listProduct);
        };
        this.addProduct = async (req, res) => {
            const product = req.body;
            await productService_1.default.addProduct(product);
            res.status(200).json('ok');
        };
        this.editProduct = async (req, res) => {
            const id = req.params.id;
            const product = req.body;
            await productService_1.default.editProduct(id, product);
            res.status(200).json('ok');
        };
        this.removeProduct = async (req, res) => {
            const id = req.params.id;
            await productService_1.default.removeProduct(id);
            res.status(200).json('ok');
        };
        this.findById = async (req, res) => {
            console.log("find by id");
            const id = req.params.id;
            const product = await productService_1.default.findById(id);
            res.status(200).json(product);
        };
        this.findByPrice = async (req, res) => {
            console.log("find by price");
            const price = req.query.price;
            const product = await productService_1.default.findByPrice(price);
            res.status(200).json(product);
        };
        this.arrangeByPrice = async (req, res) => {
            console.log("price");
            const products = await productService_1.default.arrangeByPrice();
            console.log(products);
            res.status(200).json(products);
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map