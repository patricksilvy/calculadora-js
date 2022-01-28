const botoes = document.querySelectorAll('.botao')
const display = document.querySelector('p.value')

botoes.forEach(botao => {
    botao.onclick = () => adcionarValorAoDisplay(botao)
})

function adcionarValorAoDisplay(botao) {
    const isAC = botao.innerHTML === 'AC'
    const isBack = botao.innerHTML === 'L'
    const isIgual = botao.innerHTML === '='

    if(isAC) {
        limparValoresDisplay()
    } else if(isBack) {
        voltarDigitoAnterior()
    } else if(isIgual) {
        calcularResultado()
    } else {
        let value = botao.innerHTML
        let cache = display.innerHTML
        
        display.innerHTML = cache + value
    }

}

const limparValoresDisplay = () => display.innerHTML = ''

const voltarDigitoAnterior = () => {
    let cache = display.innerHTML
    display.innerHTML = cache.substring(0, cache.length -1)
}

const calcularResultado = () => {
    const original = display.innerHTML
    if(original) {
        const replaceX = original.replace('x', '*')
        const replaceY = replaceX.replace('÷', '/')
        const resultado = eval(replaceY).toFixed(2).toString()
        resultado.split('.')[1] === '00' ?
            display.innerHTML = resultado.split('.')[0].toString() : 
            display.innerHTML = resultado
    }
}