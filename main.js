function getRank(saldo) {
  switch (true) {
    case saldo < 10:
      return 'Ferro'
    case saldo <= 20:
      return 'Bronze'
    case saldo <= 50:
      return 'Prata'
    case saldo <= 80:
      return 'Ouro'
    case saldo <= 90:
      return 'Diamante'
    case saldo <= 100:
      return 'Lendário'
    case saldo >= 101:
      return 'Imortal'
  }
}

function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas
}

const vitorias = 58
const derrotas = 20

const saldo = calcularSaldo(vitorias, derrotas)
const rank = getRank(saldo)

console.log(`O Herói tem de saldo de ${saldo} está no nível de ${rank}`)