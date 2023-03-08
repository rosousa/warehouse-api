import prisma from "../../config/db";
import { Product } from "../../models/Product";

export class DeleteProductRepository {
  constructor(){}

  async delete({ id }: Omit<Product, "name" | "amount">): Promise<Product> {
    return prisma.products.delete({
      where: {
        id
      }
    })
  }
}