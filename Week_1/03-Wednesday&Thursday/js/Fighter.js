class Fighter extends Character {
    constructor(hp = 50, dmg = 5, mana = 150, state, name = "Pyro-Seth") {
        super(hp, dmg, mana, state, name)
    }

    // Create Seth special attack
    burnToHell(victim) {
        console.log(`!!! ${this.name} invoked their special attack !!!`);
        let damage = 7;
        victim.takeDamage(damage);
        this.mana = this.mana - 50;
    }
}
