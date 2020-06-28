const display = document.getElementById('display')

const maxLength = 10

let previousVal = ''
let currentVal = ''
let operator

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
    updateDisplay(operator)
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
        case '×':
            result = prev * current
            break
        case '÷':
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
