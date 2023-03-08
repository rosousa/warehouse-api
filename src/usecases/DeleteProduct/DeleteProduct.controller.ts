import { Request, Response } from "express";
import { DeleteProductService } from "./DeleteProduct.service";

export class DeleteProductController {
  constructor(private deleteProductService: DeleteProductService){}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    await this.deleteProductService.execute({ id });

    return res.sendStatus(200);
  }
}