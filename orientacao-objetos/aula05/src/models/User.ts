import { randomUUID } from 'crypto'

import { Product } from './Product'

export class User {
  private _id: string
  private _cart: Product[]

  constructor(
    private _name: string,
    private _username: string,
    private _email: string
  ) {
    this._id = randomUUID()
    this._cart = []
  }

  public get id(): string {
    return this._id
  }

  public get username(): string {
    return this._username
  }

  public get email(): string {
    return this._email
  }

  public addToCart(product: Product): void {
    this._cart.push(product)
    console.log(`Produto adicionado no carrinho: ${product.name}`)
  }

  public removeFromCart(product: Product): void {
    const index = this._cart.indexOf(product)

    if (index !== -1) {
      this._cart.splice(index, 1)
      console.log(`${product.name} removido do carrinho.`)
    } else {
      console.log(`${product.name} não está no carrinho.`)
    }
  }

  public showProducts(): string {
    let total = 0
    this._cart.forEach((product) => {
      console.log(product.show())
      total += product.value
    })

    return `Total: R$ ${total.toFixed(2).replace('.', ',')}`
  }

  public toJson() {
    return {
      id: this._id,
      name: this._name,
      username: this._username,
      email: this._email,
    }
  }
}
