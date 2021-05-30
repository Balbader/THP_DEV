export default class Game {
    constructor(turnLeft = 10) {
        this.turnLeft = turnLeft;
    }

    newTurn() {
        this.turnLeft -= 1;
    }

    gameEnded() {
        if (this.turnLeft === 0) {
            return true;
        } else if (Character.findPlayersStillAlive().length < 2) {
            return true;
        }
    }

    whatchStats() {
        Character.findPlayersStillAlive().map(player => console.log(`${player.name} have ${player.hp} life points left.`));
        console.log("The other players are dead.");
    }

    newPlayer = (playerClass, newPlayerName) => {
        if (playerClass === "fighter") {
            let newPlayer = new Fighter(`${newPlayerName}`);
            Character.instances.push(newPlayer);
        };

        if (playerClass === "assassin") {
            let newPlayer = new Fighter(`${newPlayerName}`);
            Character.instances.push(newPlayer);
        };

        if (playerClass === "monk") {
            let newPlayer = new Fighter(`${newPlayerName}`);
            Character.instances.push(newPlayer);
        };

        if (playerClass === "paladin") {
            let newPlayer = new Fighter(`${newPlayerName}`);
            Character.instances.push(newPlayer);
        };

        if (playerClass === "berzerker") {
            let newPlayer = new Fighter(`${newPlayerName}`);
            Character.instances.push(newPlayer);
        };
    }

    startGame() {
        let addANewCharacter = prompt("Would you like to add a player to the game? (y/n)");

        if (addANewCharacter === "y" || addANewCharacter === "yes") {
            let newCharacterClass = prompt ("Which Character Class do you want your Character to be? (please enter selection) Fighter, Assassin, Monk, Paladin, Berzerker");
            newCharacterClass = newCharacterClass.toLowerCase();

            while (newCharacterClass !== "fighter" && newCharacterClass !== "assassin"
                && newCharacterClass !== "monk" && newCharacterClass !== "paladin"
                && newCharacterClass !== "berzerker") {
                newCharacterClass = prompt("ERROR: Unkown Character Class. Please try again.")
            }
        }
    }
}




















