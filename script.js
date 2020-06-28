const display = document.getElementById('display')

const maxLength = 10

const keys = {
    ENTER: 13,
    BACK: 8,
    DEL: 46
}

const operators = {
    '+': '+',
    '-': '-',
    '*': '×',
    '/': '÷'
}

let previousVal = ''
let currentVal = ''
let operator

window.addEventListener('keypress', (e) => {
    e.preventDefault()
    const value = String.fromCharCode(e.keyCode)

    if (!isNaN(value) || value === '.') {
        showDigit(value)
    } else if (Object.keys(operators).includes(value)) {
        showOperator(value)
    }
})

window.addEventListener('keydown', (e) => {
    if (e.keyCode === keys.ENTER) {
        calculate()
    } else if (e.keyCode === keys.BACK) {
        clearLast()
    } else if (e.keyCode === keys.DEL) {
        clearAll()
    }
})

function updateDisplay (val) {
    display.textContent = val.toString().slice(0, maxLength)
}

function showDigit (digit) {
    if (digit === '.' && currentVal.includes('.')) return
    if (currentVal.length === maxLength) return

    currentVal = currentVal + digit.toString()
    updateDisplay(currentVal)
}

function showOperator (op) {
    if (currentVal === '') return
    if (previousVal !== '') calculate()

    operator = op
    previousVal = currentVal
    currentVal = ''
    updateDisplay(operators[operator])
}

function calculate () {
    const prev = parseFloat(previousVal)
    const current = parseFloat(currentVal)
    let result

    switch (operator) {
        case '+':
            result = prev + current
            break
        case '-':
            result = prev - current
            break
        case '*':
            result = prev * current
            break
        case '/':
            result = prev / current
            break
    }

    currentVal = result
    previousVal = ''
    operator = null
    updateDisplay(result)
}

function clearLast () {
    currentVal = currentVal.slice(0, -1)
    updateDisplay(currentVal)
}

function clearAll () {
    previousVal = ''
    currentVal = ''
    operator = null 
    updateDisplay('')
}
