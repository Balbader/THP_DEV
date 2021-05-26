console.log('Test');

// Define a random number
const pullRandomNumberInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Create array to store random number for later comparaison
const storeRandomNumber = () => {
    let arr = [];
    while (arr.length != 6) {
        let nbr = pullRandomNumberInclusive(1, 45);
        if (!arr.includes(nbr)) {
            arr.push(nbr);
        }
    }
    return arr;
}


// Function to check if win or lose
const checkLoto = (firstName, lastName, email, lotoNumber) => {
    const message = document.getElementById("message");
    const emailRegex = new RegExp('([A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3})$');
    const draw = pullRandomNumber();

    // check if conditions are met when filling the form
    if (firstName === "") {
        alert("Veuillez renseigner un prénom");
        console.log("Veuillez renseigner un prénom");
        //return message.innerHTML = "Veuillez renseigner un prénom";
    } else if (lastName === "") {
        alert("Veuillez renseigner un nom");
        console.log("Veuillez renseigner un nom");
        //return message.innerHTML = "Veuillez renseigner un nom";
    } else if (!emailRegex.test(email) || email.length < 8 || email.length > 30) {
        alert("Mauvais format d'email");
        console.log("Mauvais format d'email");
        //return message.innerHTML = "Mauvais format d'email";
    } else if (loto.length != 6) {
        alert("Vous devez jouer 6 chifres de lotos");
        console.log("Vous devez jouer 6 chifres de lotos");
        //return message.innerHTML = "Vous devez jouer 6 chifres de lotos";
    } for (let i = 0; i < loto.length; i++) {
        if (!(draw.includes(parseInt(loto[i])))) {
            alert(`Perdu ! Les bons numéros sont ${draw.toString()}`);
            console.log(`Perdu ! Les bons numéros sont ${draw.toString()}`);
            //return message.innerHTML = `Perdu ! Les bons numéros sont ${draw.toString()}`;
        }
    }
    message.innerHTML = "Félicitation ! Vous avez gagné 1 million !!!!!!";
}


// Function to fetch the input information and check its value
const checkFormSubmit = () => {
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    email = document.getElementById("email").value;
    lotoNumber = document.getElementById("lotoNumber").value;

    checkLoto(firstName, lastName, email, lotoNumber.split(","));
}

// Fetch the input from html form
document.getElementById("submit").onclick = checkFormSubmit;
