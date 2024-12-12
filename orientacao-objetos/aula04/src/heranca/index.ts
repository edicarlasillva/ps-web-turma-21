import { Cachorro } from "./Cachorro"

const meuCachorro = new Cachorro('Rex', 'Labrador')

meuCachorro.emitirSom()
meuCachorro.latir()

console.log(meuCachorro.tipo)
console.log(meuCachorro.raca)
console.log(meuCachorro.nome)