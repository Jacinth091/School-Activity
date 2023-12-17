function Calculate() {
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value); 
    operator = document.querySelector('#selectOp').value;
    
    sum = num1 + num2;
    differ = num1 - num2;
    product = num1 * num2;
    quotient = num1 / num2;
    modulo = num1 % num2;
    average = (num1 + num2) / 2;
    result = `Sum: ${sum} <br> Product: ${product} <br> Quotient: ${parseFloat(quotient.toFixed(2))} <br> Modulo: ${parseFloat(modulo.toFixed(2))} <br> Average: ${parseFloat(average.toFixed(2))} `;
    document.getElementById('allop').innerHTML = "All Operation: ";
    document.getElementById('res-cont').style.display = "block";


    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please Input Any Value!");
        document.getElementById('p-res').style.display = "none";
        document.getElementById('allop').style.display = "none";
        document.getElementById('res-cont').style.display = "none";

    }
    else {
        try {
            switch (operator) {
            case "+":
                document.getElementById('p-res').style.display = "block";
                document.getElementById('allop').style.display = "none";
                document.getElementById('result').innerHTML = `Sum: ${sum}`;
            break;
            case "-":
                document.getElementById('p-res').style.display = "block";
                document.getElementById('allop').style.display = "none";
                document.getElementById('result').innerHTML = `Difference: ${differ}`;
            break;
            case "*":
                document.getElementById('p-res').style.display = "block";
                document.getElementById('allop').style.display = "none";
                document.getElementById('result').innerHTML = `Product: ${product}`;
            break;
            case "/":
                document.getElementById('p-res').style.display = "block";
                document.getElementById('allop').style.display = "none";
                document.getElementById('result').innerHTML = `Quotient: ${parseFloat(quotient.toFixed(2))}`;
            break;
            case "%":
                document.getElementById('p-res').style.display = "block";
                document.getElementById('allop').style.display = "none";
                document.getElementById('result').innerHTML = `Modulo: ${parseFloat(modulo.toFixed(2))}`;
                break;
            case "Ave": //Average
                document.getElementById('p-res').style.display = "block";
                document.getElementById('allop').style.display = "none";
                document.getElementById('result').innerHTML = `Average: ${average}`;
            break;
            case "All": // All Operation
                document.getElementById('result').style.height = "auto";
                document.getElementById('p-res').style.display = "none";
                document.getElementById('allop').style.display = "block";
                document.getElementById('result').innerHTML = `${result}`;
            break;
            default:
                document.getElementById('p-res').style.display = "block";
                document.getElementById('allop').style.display = "none";
                document.getElementById('result').innerHTML = 'Error!';
            break;
            }
        } catch (error) {
            document.getElementById('result').innerHTML = "ERROR!!! Invalid Operation <br>" + error.message;
        }
    }
}