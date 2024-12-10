import {Animal, Cachorro, Gato} from './AnimalNovo'

const animal1: Animal = new Cachorro('Totó')
const animal2: Animal = new Gato('Mimo')

animal1.produzirSom()
animal2.produzirSom()