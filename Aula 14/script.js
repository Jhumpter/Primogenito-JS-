let n =[]
function adicionar() {
    let numeros = document.getElementById('num')
    let nvnumero = parseFloat(numeros.value)
    if (isNaN(nvnumero)){
        alert('Digite um número')
    } else if (!n.includes(nvnumero)){
        n.push(parseFloat(nvnumero))
        let select = document.getElementById('select')
        let option = document.createElement('option')    
        option.innerHTML = `Número ${n[n.length-1]} adicionado `
        select.appendChild(option)
    } else {
        alert('Esse já foi')
    }
} 
let fim = document.getElementById('analisado')
function analise() {
    if (n.length!=0) {
    n.sort((a, b) => a - b)
    let c = 0
    let soma = 0 
    for (n[c] ; c <= n.length-1 ; c++) {
        soma += n[c]
    }
    let media = soma / n.length
    fim.innerHTML = `Ao todo, temos ${n.length} números <br> O menor valor informado foi ${n[0]} <br> O maior valor informado foi ${n[n.length-1]} <br> A soma dos números é igual a ${soma} <br> A média dos números é igual a ${media}`
    } else {
        alert('Tá querendo analisar o que lek???')
    }
}
function excluir() {
    let s = document.getElementById('select')
    s.innerHTML = ''
    let op = document.createElement('option')
    op.innerText = 'Números adicionados:'
    s.appendChild(op)
    n = []
    fim.innerHTML = 'Analisando...'
}