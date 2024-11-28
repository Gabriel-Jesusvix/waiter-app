import { Router } from "express";

import { listCategories } from "./useCases/categories/listCategories";
import { createCategories } from "./useCases/categories/createCategory";

export const router = Router();

router.get("/categories", listCategories);

router.post("/categories", createCategories);

router.get("/categories", (request, response) => {
  response.send("OK");
});

router.post("/product", (request, response) => {
  response.send("OK");
});

router.post("/categories/:categoryId/products", (request, response) => {
  response.send("OK");
});

router.get("/orders", (request, response) => {
  response.send("OK");
});

router.post("/orders", (request, response) => {
  response.send("OK");
});

router.patch("/orders/:orderId", (request, response) => {
  response.send("OK");
});

router.delete("/orders/:orderId", (request, response) => {
  response.send("OK");
});
