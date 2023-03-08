import prisma from "../../config/db";
import { Product } from "../../models/Product";

export class GetProductRepository {
  constructor(){}

  async get(): Promise<Product[] | null> {
    return prisma.products.findMany({});
  }
}