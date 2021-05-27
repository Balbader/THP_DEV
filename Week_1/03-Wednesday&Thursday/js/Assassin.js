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
        /* add last prop:
         * The attack can be invoked as many times as desired
         * Each time it is invoked, it add +1 to Ivar's dmg point
         */
    }
}
