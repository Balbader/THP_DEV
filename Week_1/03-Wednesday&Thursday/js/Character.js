class Character {
    constructor(hp, dmg, mana, state, name) {
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.state = "Still Alive";
        this.name = name;
    }

    /* Function to take damage and check damage level */
    takeDamage(damage) {
        this.hp = this.hp - damage;
        if(this.hp <= 0) {
            this.state = "Loser";
            console.log(`${this.name} is dead :(`);
        } else {
            console.log(`${this.name} have ${this.hp} Health Points remaining.`);
        }
    }

    /* Function to inflict damage */
    inflictDamage(victim) {
        console.log(`${this.name} is attacking ${victim.name} and is inflicting them ${this.dmg} Points.`);
        victim.takeDamage(this.dmg);
    }
}
