function checkNum() {

    let number = parseInt(document.getElementById('number').value);

    if (number > 0) {
        console.log("The number is POSITIVE!");
        alert("Your Inputted number is postive!!");
    }
    else {
        console.log("The number is NEGATIVE!");
        alert("Your Inputted number is NEGATIVE!!");
    }


}