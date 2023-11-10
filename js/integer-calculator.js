function calculate() {
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value); 
    operator = document.querySelector('#selectOp').value;
    
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = "Please Input Any Value!";
    }
    else {
        switch (operator) {
        case "+":
            sum = num1 + num2;
            document.getElementById('result').innerHTML = `Sum: ${sum}`;
        break;
        case "-":
            differ = num1 - num2;
            document.getElementById('result').innerHTML = `Difference: ${differ}`;
        break;
        case "*":
            product = num1 * num2;
            document.getElementById('result').innerHTML = `Product: ${product}`;
        break;
        case "/":
            quotient = num1 / num2;
            document.getElementById('result').innerHTML = `Quotient: ${parseFloat(quotient.toFixed(2))}`;
        break;
        case "%":
            modulo = num1 % num2;
            document.getElementById('result').innerHTML = `Modulo: ${parseFloat(modulo.toFixed(2))}`;
            break;
        case "Ave": //Average
            average = (num1 + num2) / 2;
            document.getElementById('result').innerHTML = `Average: ${average}`;
        break;
        default:
            console.log("Error!!");
        break;
        }
    }





    // if (num1 !== null && num1.value !== " " && num2 !== null && num2.value !== " " ) {
                // }
    // else {
        //     console.log("Input Number!!");
        // }

        
        

        
        
        // result = `Sum: ${sum} <br> Product ${product} <br> Average ${average} <br> Quotient: ${quotient}`;
        
        

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