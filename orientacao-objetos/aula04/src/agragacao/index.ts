import { Monitor } from "./Monitor"
import { Turma } from "./Turma"

const monitorA = new Monitor('Carla')
const monitorB = new Monitor('Ana')

const turmaA = new Turma('PS Web - FullStack')
turmaA.adicionarMonitor(monitorA)
turmaA.adicionarMonitor(monitorB)

monitorB.supervisionar()

turmaA.mostrarMonitores()