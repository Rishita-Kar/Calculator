let previousVal =''
let currentVal=''
let operator
let result

function allClear() //Done
{
    document.getElementById("input").value = " "
    previousVal= ''
    currentVal= ''
    operator= undefined 
}

function appendDigits(digit) //Done
{
    if (digit === '.' && currentVal.includes('.')) 
    return
    currentVal = currentVal.toString() + digit.toString()
}

let showValue = function(val)
{
    appendDigits(val)
    document.getElementById("input").value = currentVal.toString()  
    if (getOperator)
    {
        previousVal=currentVal
        appendDigits(val)
        document.getElementById("input").value = currentVal.toString()
    }
}

let getOperator = function(op)
{
    if (currentVal==='')
    return
    if (previousVal!== '')
    {
        calculate()
    }
    operator = op
    previousVal = currentVal
    currentVal = ''
}

function clear()
{
    currentVal = currentVal.toString().slice(0,-1)
}

function calculate()
{
    const prev = parseFloat(previousVal)
    const current = parseFloat(currentVal)
    if (isNaN(prev) || isNaN(current))
    return

    switch (operator){
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
    document.getElementById("input").value = result
}
