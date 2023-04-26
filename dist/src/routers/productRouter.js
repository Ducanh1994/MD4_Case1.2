"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = __importDefault(require("../controllers/productController"));
const router = (0, express_1.default)();
router.get('/', productController_1.default.showProduct);
router.post('/', productController_1.default.addProduct);
router.put('/:id', productController_1.default.editProduct);
router.delete('/:id', productController_1.default.removeProduct);
exports.default = router;
//# sourceMappingURL=productRouter.js.map