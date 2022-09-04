// clearTimeout irá cancelar um timeOut
const timeOut = 2000
const finished = () => console.log('done!')

let timer = setTimeout(finished, timeOut) //1º Parâmetro é a referência.
clearTimeout(timer)

//Assincronismo

