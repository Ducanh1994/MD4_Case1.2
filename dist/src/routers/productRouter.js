"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = __importDefault(require("../controllers/productController"));
const productRouter = (0, express_1.default)();
productRouter.get('/', productController_1.default.showProduct);
productRouter.post('/', productController_1.default.addProduct);
productRouter.put('/:id', productController_1.default.editProduct);
productRouter.delete('/:id', productController_1.default.removeProduct);
productRouter.get('/search/price', productController_1.default.findByPrice);
productRouter.get('/arrange', productController_1.default.arrangeByPrice);
productRouter.get('/:id', productController_1.default.findById);
exports.default = productRouter;
//# sourceMappingURL=productRouter.js.map