import { randomUUID } from 'crypto'

import { User } from './User'
import { Comment } from './Comment'
import { Rating } from './Rating'

import { comments } from '../database/comment'
import { ProductType } from '../types'

export class Product {
  private readonly _id: string
  private _ratings: Rating[]

  constructor(
    private _name: string,
    private _value: number,
    private _type: ProductType
  ) {
    this._id = randomUUID()
    this._ratings = []
  }

  public get id(): string {
    return this._id
  }

  public get name(): string {
    return this._name
  }

  public get value(): number {
    return this._value
  }

  // Produto, valor e todos os comentários
  public show(): string {
    console.log(`${this._name} (R$ ${this._value.toFixed(2)})`)
    this.showComments()
    return '\n---------------------\n'
  }

  public showComments(): void {
    const productComments = comments.filter(
      (comment) => comment.product === this
    )
    productComments.forEach((comment) => {
      console.log(`  [${comment.from.username}]: ${comment.content}`)
    })
  }

  public addComment(content: string, user: User): void {
    const comment = new Comment(user, this, content)
    comments.push(comment)
  }

  addRate(rate: number, user: User) {
    if (rate < 0 || rate > 5) {
      console.log('Sua avaliação deve ser entre 0 e 5')
      return
    }

    const rating = new Rating(rate, user)
    this._ratings.push(rating)

    console.log(`Avaliação de ${rate} adicionada por ${user.username}`)
  }

  public toJson() {
    return {
      id: this._id,
      name: this._name,
      price: this._value,
      type: this._type,
    }
  }
}
