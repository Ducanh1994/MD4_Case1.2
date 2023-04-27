import {Request,Response} from "express";
import {Product} from "../entities/product";
import ProductService from "../services/productService";
import productService from "../services/productService";

class ProductController {
    constructor() {
    }
    showProduct = async (req:Request,res:Response) => {
        const listProduct = await ProductService.showAll();
        res.status(200).json(listProduct)
    }
    addProduct = async (req:Request,res:Response) => {
         const product = req.body;
         await productService.addProduct(product)
        res.status(200).json('ok')
    }
    editProduct = async (req:Request,res:Response) => {
        const id = req.params.id;
        const product = req.body;
        await productService.editProduct(id,product);
        res.status(200).json('ok')
    }
    removeProduct = async (req:Request,res:Response) => {
        const id = req.params.id;
        await productService.removeProduct(id)
        res.status(200).json('ok')
    }
    findById = async (req:Request,res:Response) => {
        const id = req.params.id;
        const product = await productService.findById(id)
        res.status(200).json(product)
    }
}
export default new ProductController()