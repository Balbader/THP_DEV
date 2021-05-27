class Paladin extends Character {
    constructor(hp = 16, dmg = 3, mana = 160, state, name = "Bjorn The Healer") {
        super(hp, dmg, mana, state, name)
    }

    // Create Bjorn special attack
    healingLighing(victim) {
        console.log(`!!! ${this.name} invoked their special attack !!!`);
        let damage = 4;
        victim.takeDamage(damage);
        this.hp = this.hp + 5;
        this.mana = this.mana - 40;
    }
}
