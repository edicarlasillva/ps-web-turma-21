class Pessoa {
  constructor(private _idade: number) {}

  public get idade(): number {
    return this._idade
  }

  public set idade(idade: number) {
    this._idade = idade
  }
}
