const readline = require('readline')

let hero = { name: undefined, xp: undefined }

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function getRank(xp) {
  switch (true) {
    case xp < 1000:
      return 'Ferro'
    case xp <= 2000:
      return 'Bronze'
    case xp <= 5000:
      return 'Prata'
    case xp <= 7000:
      return 'Ouro'
    case xp <= 8000:
      return 'Platina'
    case xp <= 9000:
      return 'Ascendente'
    case xp <= 10000:
      return 'Imortal'
    case xp >= 10001:
      return 'Radiante'
  }
}

function checkNumber(string) {
  if (typeof string != 'string') return false
  return !isNaN(string) && !isNaN(parseFloat(string))
}

function getJourneyDays(redo) {
  read.question(
    `Interessante ${name}, A quantos dias está caminhando nessa estrada de aventuras? `,
    answer_days => {
      if (!checkNumber(answer_days)) {
        console.log(
          'Parece que isso não é um numero de dias... sinto que estou sendo enganado.\n'
        )
        getJourneyDays(true)
      } else {
        xp = answer_days * 100
        console.log(
          `Vejo que o heroi com quem falo, de nome ${name}, adquiriu experiencia e alcançou o nivel ${getRank(
            xp
          )}`
        )
      }
    }
  )
}

read.question('Qual é seu nome bravo heroi? ', answer_name => {
  name = answer_name
  getJourneyDays(false)
})
