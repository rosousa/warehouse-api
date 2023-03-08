import prisma from "../../config/db";
import { Product } from "../../models/Product";

export class UpdateProductRepository {
  constructor(){}

  async update({ id, amount }: Omit<Product, "name">): Promise<Product> {
    return prisma.products.update({
      where: {
        id
      },
      data: {
        amount
      }
    })
  }
}