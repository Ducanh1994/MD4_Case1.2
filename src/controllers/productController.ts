import {Request,Response} from "express";
import ProductService from "../services/productService";


class ProductController {

    constructor() {
    }
    showProduct = async (req:Request,res:Response) => {
        console.log("show Product")
        const listProduct = await ProductService.showAll();
        res.status(200).json(listProduct)
    }
    addProduct = async (req:Request,res:Response) => {
         const product = req.body;
         await ProductService.addProduct(product)
        res.status(200).json('ok')
    }
    editProduct = async (req:Request,res:Response) => {
        const id = req.params.id;
        const product = req.body;
        await ProductService.editProduct(id,product);
        res.status(200).json('ok')
    }
    removeProduct = async (req:Request,res:Response) => {
        const id = req.params.id;
        await ProductService.removeProduct(id)
        res.status(200).json('ok')
    }
    findById = async (req:Request,res:Response) => {
        console.log("find by id")
        const id = req.params.id;
        const product = await ProductService.findById(id)
        res.status(200).json(product)
    }
    findByPrice = async (req:Request,res:Response) => {
        console.log("find by price")
        const price = req.query.price;
        const product = await ProductService.findByPrice(price);
        res.status(200).json(product)
    }
    arrangeByPrice = async (req:Request,res:Response) => {
        console.log("price")
        const products = await ProductService.arrangeByPrice();
        console.log(products)
        res.status(200).json(products)
    }
}


export default new ProductController()