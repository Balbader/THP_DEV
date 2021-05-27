class Paladin extends Character {
    constructor(hp = 15, dmg = 7, mana = 400, state, name = "Bjorn The Healer") {
        super(hp, dmg, mana, state, name)
    }

    // Create Bjorn special attack
    serumOfLife(victim) {
        console.log(`!!! ${this.name} invoked their special attack !!!`);
        let damage = 5;
        victim.takeDamage(damage);
        this.hp = this.hp + 10;
        this.mana = this.mana - 100;
    }
}
