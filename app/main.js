class Persona {
  constructor (name) {
    this.name = name
  }

  saludo () {
    return `hola ${this.name}`
  }
}

const carlos = new Persona('Carlos')
console.log(carlos.saludo())
