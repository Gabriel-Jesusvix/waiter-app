import { Router } from "express";
import path from 'node:path'

import { listCategories } from "./useCases/categories/listCategories";
import { createCategories } from "./useCases/categories/createCategory";
import { listProducts } from "./useCases/products/listProducts";
import multer from 'multer'
import { createProduct } from "./useCases/products/createProduct";
import { listProductsByCategory } from "./useCases/categories/listProductsByCategory";
import { listOrders } from "./useCases/orders/listOrdes";


export const router = Router();
console.log(path.resolve(__dirname, '..', 'uploads'))
const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback) {
			callback(null, path.resolve(__dirname, '..','..', 'uploads'));
		},
		filename(req, file, callback) {
			callback(null, `${Date.now()}-${file.originalname}`);
		},
	}),
});

router.get("/categories", listCategories);

router.post("/categories", createCategories);

router.get("/products", listProducts);

router.post('/products', upload.single('image'), createProduct);


router.get("/categories/:categoryId/products",listProductsByCategory);

router.get("/orders", listOrders);

router.post("/orders", (request, response) => {
  response.send("OK");
});

router.patch("/orders/:orderId", (request, response) => {
  response.send("OK");
});

router.delete("/orders/:orderId", (request, response) => {
  response.send("OK");
});
