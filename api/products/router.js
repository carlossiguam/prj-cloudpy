import express from  "express";
import { productModel } from "./model.js";

export const productRouter = express.Router()
productRouter.post("/", async(req, rest)=>{
    const newProduct= await productModel.create(req.body)
    
})