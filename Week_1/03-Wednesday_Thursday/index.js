import Fighter from "./Fighter.js";
import Berzerker from "./Berzerker.js";
import Assassin from "./Assassin.js";
import Monk from "./Monk.js";
import Paladin from "./Paladin.js";
import Character from "./Character.js";
import Turn from "./Turn.js";
import Game from "./Game.js";


const startNewGame = document.getElementById("new");
const stats = document.getElementById("stats");


const launch = () => {
    const newGame = new Game;
    newGame.startGame();
    const turn = new Turn;
    turn.startTurn();
}

startNewGame.addEventListener("onclick", launch());
//stats.addEventListener("onclick", showStats());


/*
    const turn = new Turn;
    turn.startTurn();
*/
