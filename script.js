const display = document.getElementById('display')

let previousVal = ''
let currentVal = ''
let operator

function showDigit (digit) {
    if (digit === '.' && currentVal.includes('.')) return

    currentVal = currentVal + digit.toString()
    display.textContent = currentVal
}

function showOperator (op) {
    if (currentVal === '') return
    if (previousVal !== '') calculate()

    operator = op
    previousVal = currentVal
    currentVal = ''
    display.textContent = operator
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
    display.textContent = result
}

function clearLast () {
    currentVal = currentVal.slice(0, -1)
    display.textContent = currentVal
}

function clearAll () {
    previousVal = ''
    currentVal = ''
    operator = null 
    display.textContent = ''
}
