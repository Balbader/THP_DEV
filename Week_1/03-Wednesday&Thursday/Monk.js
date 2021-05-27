class Monk extends Character {
    constructor(hp = 8, dmg = 2, mana = 200, state, name = "Torvi The Monk") {
        super(hp, dmg, mana, state, name)
    }

    // Create Torvi special attack
    heal(victim) {
        console.log(`!!! ${this.name} invoked their special attack !!!`);
        let damage = 5;
        victim.takeDamage(damage);
        this.hp = this.hp + 8;
        this.mana = this.mana - 25;
    }
}
