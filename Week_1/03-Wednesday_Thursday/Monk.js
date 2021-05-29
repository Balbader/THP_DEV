import Character from "./Character.js";

export default class Monk extends Character {
    constructor(hp = 8, dmg = 2, mana = 200, state, name = "Moana") {
        super(hp, dmg, mana, state, name)
    }

    // Create Torvi special attack
    heal(victim) {
        console.log(`!!! ${this.name} invoked their special attack !!!`);
        if (this.mana >= 25 && this.isAlive()) {
            this.mana -= 25;
            this.hp += 8;
            if (this.hp >= 8) {
                this.hp = 8;
            }
            return -8;
        } else {
            console.log("You do not have enough mana points to invoke this spell.");
        }
    }
}
