import { Request, Response } from "express";
import { GetProductService } from "./GetProduct.service";

export class GetProductController {
  constructor(private getProductService: GetProductService){}
  
  async handle(req: Request, res: Response): Promise<Response> {
    const products = await this.getProductService.execute();

    return res.json(products);
  }
}