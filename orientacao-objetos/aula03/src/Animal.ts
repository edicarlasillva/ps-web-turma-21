// abstract class Animal {
//   constructor(protected _nome: string, protected _tipo: string) {}

//   emitirSom() {
//     console.log('Emitindo som genérico do animal.')
//   }

//   get nome(): string {
//     return this._nome
//   }

//   set nome(nome: string) {
//     this._nome = nome
//   } 

//   get tipo(): string {
//     return this._tipo
//   }

//   set tipo(tipo: string) {
//     this._tipo = tipo
//   }
// }

// class Cachorro extends Animal {
//   constructor(nome: string, private _raca: string) {
//     super(nome, 'Cachorro')
//   }

//   latir() {
//     console.log('Au, au!')
//   }

//   get raca(): string {
//     return this._raca
//   }

//   set raca(raca: string) {
//     this._raca = raca
//   }
// }

// class Galinha extends Animal {
//   constructor(nome: string, private _corPena: string) {
//     super(nome, 'Galinha')
//   }

//   cacarejar() {
//     console.log('Cocoricó!')
//   }

//   get corPena(): string {
//     return this._corPena
//   }

//   set corPena(corPena: string) {
//     this._corPena = corPena
//   }
// }

// class Peixe extends Animal {
//   constructor(nome: string, private _tipoAgua: string) {
//     super(nome, 'Peixe')
//   }

//   nadar() {
//     console.log('Nadando')
//   }

//   get tipoAgua(): string {
//     return this._tipoAgua
//   }

//   set tipoAgua(tipoAgua: string) {
//     this._tipoAgua = tipoAgua
//   }
// }

// const cachorro = new Cachorro('Bily', 'Poodle')
// console.log(cachorro.nome)
// console.log(cachorro.tipo)
// console.log(cachorro.raca)

// cachorro.emitirSom()
// cachorro.latir()

// const galinha = new Galinha('Pintadinha', 'Branca')
// galinha.cacarejar()
// console.log(galinha.corPena)

// const peixe = new Peixe('Nemo', 'Salgada')
// peixe.nadar()
// console.log(peixe.tipoAgua)

// // não podemos instanciar classes abstratas
// // const animal = new Animal() 