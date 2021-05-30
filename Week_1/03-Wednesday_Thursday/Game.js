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
        if (playerClass === "Fighter") {
            let newPlayer = new Fighter(`${newPlayerName}`);
            Character.instances.push(newPlayer);
        };

        if (playerClass === "Assassin") {
            let newPlayer = new Fighter(`${newPlayerName}`);
            Character.instances.push(newPlayer);
        };

        if (playerClass === "Monk") {
            let newPlayer = new Fighter(`${newPlayerName}`);
            Character.instances.push(newPlayer);
        };

        if (playerClass === "Paladin") {
            let newPlayer = new Fighter(`${newPlayerName}`);
            Character.instances.push(newPlayer);
        };

        if (playerClass === "Berzerker") {
            let newPlayer = new Fighter(`${newPlayerName}`);
            Character.instances.push(newPlayer);
        };
    }

    startGame() {
        let addANewCharacter = prompt("Would you like to add a player to the game? (y/n)");

        if (addANewCharacter === "y" || addANewCharacter === "yes") {
            let newPlayerClass = prompt ("Which Character Class do you want your Character to be?");
        }
    }
}
