/*const { EventEmitter } = require('events')

const eventos = new EventEmitter() //uma classe na extrutura de função

//Disparando eventos

eventos.on('saySomething', (message) => {
  console.log('Eu ouvi você:', message)
}) //ounvido algum evento, como 2° argumento, precisamos de uma função

eventos.emit('saySomething', "Bruna") //emitindo eventos
eventos.emit('saySomething', "João")
eventos.emit('saySomething', "Maria")*/

//Herdando o EventEmitter

const {inherits} = require('util') //irá herdar as funcionalidades do eventEmitter
const {EventEmitter} = require('events')

function Character(name) {
  this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')