import Game from "./Game.js";
import Character from "./Character.js";

export default class Turn extends Game {
    constructor(turnNbr = 1, turnLeft) {
        super (turnLeft);
        this.turnNbr = turnNbr;
    }

    // Define new turn
    newRound() {
        this.turnNbr += 1;
    }

    // Make sure that players are present in game
    targetPlayer = (playersBatch = Character.instances, i, playerAttacked = "") => {
        if (playersBatch.filter(player => player.name.toLowerCase()
            !== playersBatch[i].name.toLowerCase()).find(player => player.name.toLowerCase()
                === playerAttacked.toLowerCase() === undefined)) {
            return false;
        } else {
            return true;
        }
    }

    // Initiate new turn and run turn
    startTurn() {
        let playersBatch = Character.shufflePlayer();
        alert(`Round ${this.turnNbr}`);

        for (let i = playersBatch.length -1; i >= 0; i--) {
            let playerAttacked = prompt(`It's ${playersBatch[i].name} turn. Who do you want to attack?`);

            while (!this.targetPlayer(playersBatch, i, playerAttacked)) {
                playerAttacked = prompt(`${playerAttacked} is not in this game. Who do you want to attack?`);
            }
            playerAttacked = playersBatch.find(player => player.name.toLowerCase()
                === playerAttacked.toLowerCase());

            let attackType = prompt(`Do you want to use your special attack? (y/n)`);
            let dmgNbr;

            if (attackType === 'y') {
                dmgNbr = playersBatch[i].specialAttack(playerAttacked);
            } else {
                dmgNbr = playersBatch[i].dealDamage(playerAttacked);
            }
            console.log(`\n ${playersBatch[i].name} is attacking ${playerAttacked.name}. ${playerAttacked.name} recieved ${dmgNbr} damage points and has ${playerAttacked.hp} health points left.`);
        }

        let stillAlive = playersBatch.filter(player => player.isAlive());
    }
}




























