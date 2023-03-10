import prisma from "../../config/db";
import { Product } from "../../models/Product";

export class CreateProductRepository {
  constructor(){}

  async create({ name, amount }: Omit<Product, "id">): Promise<void> {
    await prisma.products.create({
      data: {
        name,
        amount
      }
    })
  }
}