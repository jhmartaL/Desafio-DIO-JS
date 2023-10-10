
jogador(55, 0)

function jogador(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas
    let nivel = saldoVitorias
    if (nivel <= 10) {
        nivel = "Ferro"
    } else if (nivel >= 11 && nivel <= 20) {
        nivel = "Bronze"
    } else if (nivel >= 21 && nivel <= 50) {
        nivel = "Prata"
    } else if (nivel >= 51 && nivel <= 80) {
        nivel = "Ouro"
    } else if (nivel >= 81 && nivel <= 90) {
        nivel = "Diamante"
    } else if (nivel >=91 && nivel <= 100) {
        nivel = "Lendário"
    }else{
        nivel = "Imortal"
    }

    console.log(`"O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}"`)
}
