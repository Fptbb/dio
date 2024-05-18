const readline = require('readline')

let hero = { name: undefined, xp: undefined }

// Logica para perguntar usando stdin e stdout
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function determinarRank(xp) {
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

function checar_numero(string) {
  if (typeof string != 'string') return false
  return !isNaN(string) && !isNaN(parseFloat(string))
}

function get_journey_days(redo) {
  read.question(
    `Interessante ${name}, A quantos dias está caminhando nessa estrada de aventuras? `,
    answer_days => {
      if (!checar_numero(answer_days)) {
        console.log(
          'Parece que isso não é um numero de dias... sinto que estou sendo enganado.\n'
        )
        get_journey_days(true)
      } else {
        xp = answer_days * 100
        console.log(
          `Vejo que o heroi com quem falo, de nome ${name}, adquiriu experiencia e alcançou o nivel ${determinarRank(
            xp
          )}`
        )
      }
    }
  )
}

read.question('Qual é seu nome bravo heroi? ', answer_name => {
  name = answer_name
  get_journey_days(false)
})
