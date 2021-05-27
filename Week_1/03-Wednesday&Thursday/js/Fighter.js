class Fighter extends Character {
    constructor(hp = 12, dmg = 4, mana = 40, state, name = "Pyro-Seth") {
        super(hp, dmg, mana, state, name)
    }

    // Create Seth special attack
    darkVision(victim) {
        console.log(`!!! ${this.name} invoked their special attack !!!`);
        let damage = 5;
        victim.takeDamage(damage);
        this.mana = this.mana - 20;
        /* add last property: once the special attack is invoked,
         * Seth will recieve 2 dmg pts per attack recieved till next turn*/
    }
}
