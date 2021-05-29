import Character from "./Character.js";
import Fighter from "./Fighter.js";
import Berzerker from "./Berzerker.js";
import Assissin from "./Assassin.js";
import Monk from "./Monk.js";
import Paladin from "./Paladin.js";
import Game from "./Game.js";
// import all my files here 

// Fighter
let grace = new Fighter;
Character.instances.push(grace);

// Berzerker
let draven = new Berzerker;
Character.instances.push(draven);
console.table(Character.instances);


