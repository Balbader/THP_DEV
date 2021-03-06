import Character from "./Character.js";

export default class Berzerker extends Character {
    constructor(hp = 8, dmg = 4, mana = 0, state, name = "Draven", specialAttack = "rage") {
        super(hp, dmg, mana, state, name)
        this.specialAttack = specialAttack;
    }

    // Create Draven special attack
    rage(victim) {
        console.log(`!!! ${this.name} invoked their special attack !!!`);
        if (this.isAlive()) {
            this.hp -= 1;
            this.dmg += 1;
        }
    }
}
