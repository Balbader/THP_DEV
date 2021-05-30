import Character from "./Character.js";

export default class Paladin extends Character {
    constructor(hp = 16, dmg = 3, mana = 160, state, name = "Ulder") {
        super(hp, dmg, mana, state, name)
    }

    // Create Ulder special attack
    healingLighing(victim) {
        if (this.mana >= 40 && victim.isAlive()) {
            this.mana -= 40;
            victim.takeDamage(4);
            this.hp += 5;
            if (this.hp >= 16) {
                this.hp = 16;
            }
            return 4;
        } else {
            console.log("You do not have enough mana points to invoke this spell.");
        }
    }
}
