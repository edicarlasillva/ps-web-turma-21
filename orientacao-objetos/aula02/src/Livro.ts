export class Livro {
  titulo: string = 'Não informado'
  autor: string = 'Não informado'
  anoPublicacao: number = 0

  mostrarDetalhes(): void {
    console.log(`O livro ${this.titulo} escrito por ${this.autor} foi publicado em ${this.anoPublicacao}`)
  }
}