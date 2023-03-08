import { Request, Response } from "express";
import { CreateProductService } from "./CreateProduct.service";

export class CreateProductController {
  constructor(private createProductService: CreateProductService){}

  handle(req: Request, res: Response): Response {
    const { name, amount } = req.body;

    this.createProductService.execute({ name, amount });

    return res.sendStatus(201);
  }
}