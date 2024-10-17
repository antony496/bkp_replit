/**
*FUNÇÔES SÂO BLOCOS QUE PODEM SER REUTILIZADOS
 *FUNÇÔES PODEM OU NÂO RECEBER PARÂMETROS
 * FUNÇÔES PODEM RETORNAR UM VALOR
OU NÂO
*FUNÇÔES PODEM SER ANÔNIMAS 
 */
// DECLARAÇÂO DE FUNÇÂO 
function dizOla() {
  alert('Olá')
}
function olaPessoas(nome) {
  alert('Olá,' + nome)
}
const nome = ' Gabriel '
const sobrenome = ' Seiler '
const idade = 16

function dadosPessoa() {
  const dados = nome + sobrenome + idade
  console.log(dados)
}

//INVOCAÇÂO DE FUNÇÂO
dizOla()
olaPessoas(' Seiler ')