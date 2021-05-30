import Character from "./Character.js";
import Fighter from "./Fighter.js";
import Berzerker from "./Berzerker.js";
import Assassin from "./Assassin.js";
import Monk from "./Monk.js";
import Paladin from "./Paladin.js";
import Game from "./Game.js";

// Fighter
let grace = new Fighter;
Character.instances.push(grace);

// Berzerker
let draven = new Berzerker;
Character.instances.push(draven);

//Monk
let moana = new Monk;
Character.instances.push(moana);

//Assassin
let carl = new Assassin;
Character.instances.push(carl);

//Paladin
let ulder = new Paladin;
Character.instances.push(ulder);
console.table(Character.instances);

let newGame = new Game;
