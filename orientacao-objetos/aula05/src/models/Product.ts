import { User } from "./User";

import { comments } from "../database/comments";

import { ProductType } from "../types";


export class Product {
    private readonly _id: string;

    constructor(
        private _name: string, 
        private _value: number, 
        private _type: ProductType
    ) {
        this._id = '1234';
    }

    public get id(): string {
        return this._id;
    }

    public get name(): string { 
        return this._name;
    }

    public get value(): number {
        return this._value;
    }

    public show(): string {
        console.log(`${this._name} (R$ ${this._value.toFixed(2)})`);
        this.showComments();
        return "\n---------------------\n";
    }

    public showComments(): void {
        const productComments = comments.filter((comment) => comment.product === this);
        productComments.forEach((comment) => {
            console.log(`  [${comment.from.username}]: ${comment.content}`);
        });
    }

    public addComment(content: string, user: User): void {
        console.log('Adicionado')
    }

    toJson() {
      return {
        id: this._id,
        name: this._name,
        price: this._value,
        type: this._type
      }
    }
}


// const product = {
//   _id: 'sdhshdjhjshd',
//   _name: 'Computador',
//   _value: 2000.00,
//   _type: 'Special'
// }

console.log(product.toJson())