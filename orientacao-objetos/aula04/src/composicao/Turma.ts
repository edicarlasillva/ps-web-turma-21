import { Aluno } from "./Aluno"

export class Turma {
  private alunos: Aluno[] = []

  constructor(
    public nome: string
  ) {}

  adicionarAluno(nome: string, idade: number) {
    const aluno = new Aluno(nome, idade)
    this.alunos.push(aluno)
  }

  listarAlunos() {
    console.log(`Alunos da turma ${this.nome}:`)
    this.alunos.forEach(aluno => aluno.apresentar())
  }
}
