import Character from "./Character.js";

class Assassin extends Character {
    constructor(hp = 6, dmg = 6, mana = 20, state, name = "Carl") {
        super(hp, dmg, mana, state, name)
    }

    // Create Ivar special attack
    shadowHit(victim) {
        console.log(`!!! ${this.name} invoked their special attack !!!`);
        let damage = 7;
        victim.takeDamage(damage);
        this.mana = this.mana;
        this.dmg = this.dmg + 1;
        this.hp = this.hp;
    }
}
