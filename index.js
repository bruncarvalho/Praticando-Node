const questions = [
  'Qual seu nome?',
  'Data de nascimento?',
  'Cidade onde nasceu?',
  'Cidade onde mora?'
]

const ask = (index = 0) => {
  process.stdout.write('\n\n' + questions[index] + '\n >. ') //processo de saída padrão
}

ask()

const answers = []

process.stdin.on('data', data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length){
    ask(answers.length)
  } else {
  process.exit()
  }
})

process.on('exit', () => {
  console.log(`
  Dados pessoais:
  
  Nome:
  ${answers[0]}
  
  Data de nascimento:
  ${answers[1]}
  
  Cidade onde nasceu:
  ${answers[2]}
  
  Cidade onde mora atualmente:
  ${answers[3]}
  `)
})
