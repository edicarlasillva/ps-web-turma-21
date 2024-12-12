import { Monitor } from "./Monitor"

export class Turma {
  constructor(
    public nome: string,
    public monitores: Monitor[] = []
  ) {}

  adicionarMonitor(monitor: Monitor) {
    this.monitores.push(monitor)
  }

  mostrarMonitores() {
    if (this.monitores.length === 0) {
      console.log(`A turma ${this.nome} não possui monitores`)
    } else {
      console.log(`Monitores da turma ${this.nome}:`)
      this.monitores.forEach(monitor => {
        console.log(`- ${monitor.nome}`)
      })
    }
  }
}
