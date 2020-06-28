let previousVal = ''
let currentVal = ''
let operator
let result

const display = document.getElementById('display')

function clearAll () {
    display.textContent = ' '
    previousVal = ''
    currentVal = ''
    operator = undefined 
}

function appendDigits (digit) {
    if (digit === '.' && currentVal.includes('.')) return
    currentVal = currentVal.toString() + digit.toString()
}

function showDigit (digit) {
    appendDigits(digit)
    display.textContent = currentVal.toString()  

    if (showOperator) {
        previousVal = currentVal
        appendDigits(digit)
        display.textContent = currentVal.toString()
    }
}

function showOperator (op) {
    if (currentVal === '') return
    if (previousVal !== '') {
        calculate()
    }

    operator = op
    previousVal = currentVal
    currentVal = ''
}

function clear () {
    currentVal = currentVal.toString().slice(0,-1)
}

function calculate () {
    const prev = parseFloat(previousVal)
    const current = parseFloat(currentVal)

    if (isNaN(prev) || isNaN(current)) return

    switch (operator) {
        case '+':
            result = prev + current
            break
        case '-':
            result = prev - current
            break
        case '×':
            result = prev * current
            break
        case '÷':
            result = prev / current
            break
        default:
            return
    }

    currentVal = result
    previousVal = ''
    operator = undefined
    display.textContent = result
}
