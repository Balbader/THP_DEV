class Berzerker extends Character {
    constructor(hp = 8, dmg = 4, mana = 0, state, name = "Ivar The Berzerker") {
        super(hp, dmg, mana, state, name)
    }

    // Create Ivar special attack
    rage(victim) {
        console.log(`!!! ${this.name} invoked their special attack !!!`);
        let damage = 5;
        victim.takeDamage(damage);
        this.mana = this.mana;
        this.dmg = this.dmg + 1;
        this.hp = this.hp - 1;
        /* add last prop:
         * The attack can be invoked as many times as desired
         * Each time it is invoked, it add +1 to Ivar's dmg point
         */
    }
}
