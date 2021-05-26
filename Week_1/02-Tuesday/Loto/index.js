const checkLoto = (firstName, lastName, email, lotoNumber) => {
    const message = document.getElementById('message');
    const emailRegex = new RegExp('([A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3})$');
    const draw = pullRandomNumber();

    // check if conditions are met when filling the form
    if (firstName === "") {
        return message.innerHTML = "Veuillez renseigner un prénom";
    } else if (lastName === "") {
        return message.innerHTML = "Veuillez renseigner un nom";
    } else if (!emailRegex.test(email) || email.length < 8 || email.length > 30) {
        return message.innerHTML = "Mauvais format d'email";
    } else if (loto.length != 6) {
        return message.innerHTML = "Vous devez jouer 6 chifres de lotos";
    } for (let i = 0; i < loto.length; i++) {
        if (!(draw.includes(parseInt(loto[i])))) {
            return message.innerHTML = `Perdu ! Les bons numéros sont ${draw.toString()}`;
        }
    }
    message.innerHTML = "Félicitation ! Vous avez gagné 1 million !!!!!!";
};
















// Function to fetch the input information and check its value
const checkFormSubmit = () => {
    firstName = document.getElementById("#firstName").value;
    lastName = document.getElementById("#lastName").value;
    email = document.getElementById("#email").value;
    lotoNumber = document.getElementById("#lotoNumber").value;

    checkLoto(firstName, lastName, email, lotoNumber.split(","));
};
