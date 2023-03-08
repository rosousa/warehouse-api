import prisma from "../../config/db";

interface ProductDTO {
  name: string
  amount: number
}

export class CreateProductRepository {
  constructor(){}

  async create({ name, amount }: ProductDTO): Promise<void> {
    await prisma.products.create({
      data: {
        name,
        amount
      }
    })
  }
}