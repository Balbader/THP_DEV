import Game from "./Game.js";

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

        }
    }
}
