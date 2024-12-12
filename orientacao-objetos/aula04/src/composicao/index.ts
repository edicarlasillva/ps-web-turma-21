import { Turma } from "./Turma"

const turmaA = new Turma('Matemática')
turmaA.adicionarAluno('Carla', 36)
turmaA.adicionarAluno('João', 40)
turmaA.adicionarAluno('Maria', 20)

turmaA.listarAlunos()