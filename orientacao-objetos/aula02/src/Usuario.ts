export class Usuario {
  nome: string
  // idade: string
  // email: string
  idade: number | undefined
  email: string | undefined

  constructor(nome: string, idade?: number, email?: string) {
    this.nome = nome
    this.idade = idade
    this.email = email
  }

  mostrarInfos() {
    console.log(`Nome: ${this.nome}`)
    if (this.idade) {
      console.log(`Idade: ${this.idade}`)
    }

    if (this.email) {
      console.log(`E-mail: ${this.email}`)
    }
  }
}


// export class Usuario {
//   nome: string = 'Não informada'
//   idade: number = 0

//   saudacao(): void {
//     console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade}.`)
//   }

//   obterNome(): string {
//     return this.nome
//   }

//   atualizarNome(novoNome: string): void {
//     this.nome = novoNome
//   }
// }


// export class Usuario {
//   nome: string = 'Não informada'
//   idade: number = 0
//   email?: string

//   saudacao(): void {
//     console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} e e-mail ${this.email ?? 'Não informado'}`)
//   }
// }



