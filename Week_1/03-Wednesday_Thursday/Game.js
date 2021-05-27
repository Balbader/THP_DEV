class Game {
    constructor(turnLeft = 10) {
        this.turnLeft = turnLeft;
    }

    newTurn() {
        this.turnLeft -= 1;
    }

    gameEnded() {
        if (this.turnLeft === 0) {
            return true;
        } else if ()
    }
}
