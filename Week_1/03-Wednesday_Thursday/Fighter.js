import Character from "./Character.js";

class Fighter extends Character {
    constructor(hp = 12, dmg = 4, mana = 40, state, name = "Grace") {
        super(hp, dmg, mana, state, name)
    }

    // Create Grace special attack
    darkVision(victim) {
        console.log(`!!! ${this.name} invoked their special attack !!!`);
        if (this.mana >= 20 && victim.isAlive()) {
            this.mana -= 20;
            victim.takeDamage(5);
            this.hp += 2;
            return 5 //??
        } else {
            console.log("You do not have enough mana points to invoke this spell.");
        }
    }
}

let grace = new Fighter();
Character.instances.push(grace);
console.log(grace.name);
