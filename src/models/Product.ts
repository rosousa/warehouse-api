export class Product {
  id: number
  name: string
  amount: number

  constructor({ id, name, amount}: Product) {
    this.id = id
    this.name = name
    this.amount = amount
  }
}