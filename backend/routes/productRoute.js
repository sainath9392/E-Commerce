import express from "express";
import {
  addproduct,
  listProduct,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";

const productRouter = express.Router();

productRouter.post("/add",upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount1:1},{name:'image3',maxCount:1},{name:"image4",maxCount:1}]), addproduct);
productRouter.delete("/remove", removeProduct);
productRouter.get("/single", singleProduct);
productRouter.get("list", listProduct);

export default productRouter
