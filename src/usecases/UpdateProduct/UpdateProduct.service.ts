import { ProductDTO } from "../../DTO/ProductDTO";
import { UpdateProductRepository } from "../../repositories/UpdateProductRepository/UpdateProductRepository";

export class UpdateProductService {
  constructor(private updateProductRepository: UpdateProductRepository){}

  async execute({ id, amount }: Omit<ProductDTO, "name">): Promise<ProductDTO> {
    if(!amount && amount !== 0) throw new Error("Invalid body request!");

    const updatedProduct = this.updateProductRepository.update({ id, amount });
  
    if(!updatedProduct) throw new Error("Product doesn't exists!");

    return updatedProduct;
  }
}