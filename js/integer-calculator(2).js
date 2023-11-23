function calculate() {
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value); 
    operator = document.querySelector('#selectOp').value;
    
    sum = num1 + num2;
    differ = num1 - num2;
    product = num1 * num2;
    quotient = num1 / num2;
    modulo = num1 % num2;
    average = (num1 + num2) / 2;
    result = `Sum: ${sum} <br> Product ${product} <br> Quotient: ${parseFloat(quotient.toFixed(2))} <br> Modulo: ${parseFloat(modulo.toFixed(2))} <br> Average: ${average} `;

    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = "Please Input Any Value!";
    }
    else {
        switch (operator) {
        case "+":
            document.getElementById('result').innerHTML = `Sum: ${sum}`;
        break;
        case "-":
            document.getElementById('result').innerHTML = `Difference: ${differ}`;
        break;
        case "*":
            document.getElementById('result').innerHTML = `Product: ${product}`;
        break;
        case "/":
            document.getElementById('result').innerHTML = `Quotient: ${parseFloat(quotient.toFixed(2))}`;
        break;
        case "%":
            document.getElementById('result').innerHTML = `Modulo: ${parseFloat(modulo.toFixed(2))}`;
            break;
        case "Ave": //Average
            document.getElementById('result').innerHTML = `Average: ${average}`;
        break;
        case "All": // All Operation
            document.getElementById('result').style.height = "auto";
            document.getElementById('result').innerHTML = `All Operation: <br> ${result}`;
        break;
        default:
            document.getElementById('result').innerHTML = 'Error!';
        break;
        }
    }
}