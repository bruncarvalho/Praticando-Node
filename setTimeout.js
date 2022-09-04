// setTimeout irá rodar uma função de de x milissegundos
const timeOut = 2000
const finished = () => console.log('done!')

setTimeout(finished, timeOut) //1º Parâmetro é a referência.
console.log('mostrar')
console.log('de novo')

//Assincronismo