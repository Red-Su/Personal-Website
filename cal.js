var y = 0
var firstNumber = ""
var secondNumber = ""
var operatorSign = ""
var inputNumber = ""
function number (x) {
    if (y == 1) {
        if (ifSubmit == true) {
            document.getElementById('test').value = "";
            ifSubmit = false
        }
        secondNumber += x
        document.getElementById('test').value = inputNumber = firstNumber + operatorSign + secondNumber;
        return secondNumber
    } else {
        firstNumber += x
        document.getElementById('test').value = inputNumber = firstNumber;
        return firstNumber
    }
 
}
function restart () {
    y = 0
    firstNumber = ""
    secondNumber = ""
    operatorSign = ""   
    inputNumber = ""
    document.getElementById('test').value = "";
}
function operatorButton (operator) {
    switch (operator) {
        case "+":
            y = 1
            operatorSign = "+"
            document.getElementById('test').value = inputNumber += operator;
            break;
        case "-":
            y = 1
            operatorSign = "-"
            document.getElementById('test').value = inputNumber += operator;
            break;
        case "x":
            y = 1;
            operatorSign = "x"
            document.getElementById('test').value = inputNumber += operator;
            break;
        case "/":
            y = 1
            operatorSign = "/"
            document.getElementById('test').value = inputNumber += operator;
            break;
        }
}

var ifSubmit = false
function submit (event) {
    switch (operatorSign) {
        case "+":
            document.getElementById('test').value = inputNumber = add(parseInt(firstNumber), parseInt(secondNumber));
            ifSubmit = true
            break;
        case "-":
            document.getElementById('test').value = inputNumber = sub(parseInt(firstNumber), parseInt(secondNumber));
            ifSubmit = true
            break;
        case "x":
            document.getElementById('test').value = inputNumber = multiply(parseInt(firstNumber), parseInt(secondNumber));
            ifSubmit = true
            break;
        case "/":
            document.getElementById('test').value = inputNumber = divide(parseInt(firstNumber), parseInt(secondNumber));
            ifSubmit = true
            break;
        }
        if (ifSubmit == true) {
            y = 0
            firstNumber = ""
            secondNumber = ""
            operatorSign = ""   
            inputNumber = ""
        }
    
   
    event.preventDefault();
}
const form = document.getElementById('form');
form.addEventListener("submit", submit);
function add (first, second) {
    return first + second
}
function sub (first, second) {
    return first - second
}
function multiply  (first, second) {
    return first * second
}
function divide (first, second) {
    return first / second
}