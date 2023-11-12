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
            document.getElementById('result').style.height = "50px";
            document.getElementById('result').innerHTML = `Sum: ${sum}`;
        break;
        case "-":
            document.getElementById('result').style.height = "50px";
            document.getElementById('result').innerHTML = `Difference: ${differ}`;
        break;
        case "*":
            document.getElementById('result').style.height = "50px";
            document.getElementById('result').innerHTML = `Product: ${product}`;
        break;
        case "/":
            document.getElementById('result').style.height = "50px";
            document.getElementById('result').innerHTML = `Quotient: ${parseFloat(quotient.toFixed(2))}`;
        break;
        case "%":
            document.getElementById('result').style.height = "50px";
            document.getElementById('result').innerHTML = `Modulo: ${parseFloat(modulo.toFixed(2))}`;
            break;
        case "Ave": //Average
            document.getElementById('result').style.height = "50px";
            document.getElementById('result').innerHTML = `Average: ${average}`;
        break;
        case "All": // All Operation
            document.getElementById('result').style.height = "150px";
            document.getElementById('result').innerHTML = `All Operation: <br> ${result}`;
        break;
        default:
            document.getElementById('result').innerHTML = 'Error!';
        break;
        }
    }





    // if (num1 !== null && num1.value !== " " && num2 !== null && num2.value !== " " ) {
                // }
    // else {
        //     console.log("Input Number!!");
        // }

        
        

        
        
        
        

    // document.getElementById('sum').innerHTML = sum;
    // document.getElementById('differ').innerHTML = differ;
    // document.getElementById('prod').innerHTML = product;
    // document.getElementById('quotient').innerHTML = quotient;
    // document.getElementById('ave').innerHTML = average;
    
}

    // if (output === "Addition") {
    //     console.log("Add");
    // }
    // else {
    //     console.log("Errpr");
    // }


    // console.log(sum);
    // console.log(differ);
    // console.log(product);
    // console.log(average);
    // console.log(quotient);
    // console.log(operator);
    // console.log(output);

    // if(num1 === 0 && num2 === 0) {
    //     // console.log("Bogo");
    //     document.getElementById('result').innerHTML = "ERROR";
    // }