import { randomUUID } from 'crypto'

import { User } from './User'

export class Rating {
  private readonly _id: string

  constructor(
    private _rate: number,
    private _user: User
  ) {
    this._id = randomUUID()
  }

  get id(): string {
    return this._id
  }

  get rate(): number {
    return this._rate
  }

  get user(): User {
    return this._user
  }
}

