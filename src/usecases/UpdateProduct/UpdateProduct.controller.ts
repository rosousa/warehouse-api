import { Request, Response } from "express";
import { UpdateProductService } from "./UpdateProduct.service";

export class UpdateProductController {
  constructor(private updateProductService: UpdateProductService){}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id, amount } = req.body;

    const updatedProduct = await this.updateProductService.execute({ id, amount });

    return res.json(updatedProduct);
  }
}