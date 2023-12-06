
// let userName = 'James';
// let customerID = '1221233';
// let unitConsumed = 150;
// let total;
// const charge = 1.63;


// function Calculate(user, ID, consume, charge) {
//     let total 
//     if (consume === 150){
//        total = consume * charge;
       
//     }
    
//     return total;
// }

// function Print(user, ID, consume, total) {
//     console.log(`Name: ${user}`);
//     console.log(`ID: ${ID}`);
//     console.log(`Unit Consumed: ${consume}`);
//     console.log(`Amount Charged : ${total}`);
// }


// total = Calculate(userName, customerID, unitConsumed, charge);
// Print(userName, customerID, unitConsumed, total);

let userName = prompt("Enter Name: ");
let customerID = prompt("Enter Customer ID: ");
let unitConsumed = parseFloat(prompt("Unit Consumed: "));
let amountCharge, amountSURCHARGE;
const unitCharge = {
    chOne: 1.20,
    chTwo: 1.50,
    chThree: 1.80,
    chFour: 2.00
}
const SURCHRAGE = .15;


function Calculate(consumed, {chOne, chTwo, chThree, chFour},  charge) {
    let amountCharge, amountSURCHARGE
    if (consumed <= 199) {
        amountCharge = consumed * chOne;

        
    }
    else if (consumed >= 200 && consumed < 400 ) {
        amountCharge = consumed * chTwo;


    }
    else if (consumed >= 400 && consumed < 600){
        amountCharge = consumed * chThree;
        amountSURCHARGE = amountCharge * charge;             // SURCHRAGE 

    }
    else if (consumed >= 600) {
        amountCharge = consumed * chFour;
        amountSURCHARGE = amountCharge * charge;             // SURCHRAGE

        
    }
    return [amountCharge, amountSURCHARGE];

}

function Print(user, ID, consumed) {
    console.log(`Name: ${user}`);
    console.log(`ID: ${ID}`);
    console.log(`Unit Consumed: ${consumed}`);
    console.log(`Amount Charged : ${calcAmountCharge}`);
    console.log(`Total Surcharge : ${calcAmountSurcharge}`);
}


let [calcAmountCharge, calcAmountSurcharge] = Calculate(unitConsumed, unitCharge, SURCHRAGE);
Print(userName, customerID, unitConsumed);