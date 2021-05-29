import Character from "./Character.js";
//import Turn from "./Turn.js";

export default class Assassin extends Character {
    constructor(hp = 6, dmg = 6, mana = 20, state, name = "Carl") {
        super(hp, dmg, mana, state, name)
    }

    // Create Carl special attack
    shadowHit(victim) {
        console.log(`!!! ${this.name} invoked their special attack !!!`);
        if (this.mana >= 20 && victim.isAlive()) {
            this.mana -= 20;
            victim.takeDamage(7);
            this.targetPlayer = victim;

            if (this.targetPlayer.state === PLAYING) {
                this.takeDamage(7);
                console.log(`${this.name} looses 7 life points as he did not kill ${victim.name}.}`);
            }
            return 7;
        } else {
             console.log("You do not have enough mana points to invoke this spell.");
        }
    }
}
