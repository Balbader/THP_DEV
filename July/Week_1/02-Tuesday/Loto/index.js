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
    const draw = storeRandomNumber();
    console.log(draw);

    // check if conditions are met when filling the form
    if (firstName === "") {
        message.innerHTML = "Veuillez renseigner un prénom";
    } else if (lastName === "") {
        message.innerHTML = "Veuillez renseigner un nom";
    } else if (!emailRegex.test(email) || email.length < 8 || email.length > 30) {
        message.innerHTML = "Mauvais format d'email";
    } else if (lotoNumber.length != 6) {
        message.innerHTML = "Vous devez jouer 6 chifres de lotos";
    } else {
        const isWin = lotoNumber.every((nbr) => {
            return draw.includes(parseInt(nbr));
        });
        if (isWin) {
            message.innerHTML = "Félicitation ! Vous avez gagné 1 million !!!!!!";
        } else {
            message.innerHTML = `Perdu ! Les bons numéros sont ${draw.toString()}`;
        }
    }
}


// Function to fetch the input information and check its value
const checkFormSubmit = (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const lotoNumber = document.getElementById("lotoNumber").value;
    checkLoto(firstName, lastName, email, lotoNumber.split(","));
}

// Fetch the input from html form
document.getElementById("submit").onclick = checkFormSubmit;
