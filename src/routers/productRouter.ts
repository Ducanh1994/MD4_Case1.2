import Router from "express";
import productController from "../controllers/productController";


const router = Router();
router.get('/',productController.showProduct);
router.post('/',productController.addProduct);
router.put('/:id',productController.editProduct);
router.delete('/:id',productController.removeProduct);
export default router;