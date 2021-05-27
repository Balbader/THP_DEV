const LOSER = "Loser";
const WINNER = "Winner";
const ALIVE = "Still Alive";

class Character {
    constructor(hp, dmg, mana, state = ALIVE, name) {
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.state = state;
        this.name = name;
    }

    /* Function to check Player life status*/
    isPlayerAlive() {
        if (this.hp > 0) {
            return true;
        } else {
            this.state = LOSER;
            return false;
        }
    }

    /* Function to take damage and check damage level */
    takeDamage(damage) {
        if (this.isPlayerAlive()) {
            this.hp -= damage;
            console.log(`${this.name} have ${this.hp} Health Points remaining.`);
        } else {
            this.stat = LOSER;
            console.log(`${this.name} is dead :(`);
        }
    }

    /* Function to inflict damage */
    inflictDamage(victim) {
        console.log(`${this.name} is attacking ${victim.name} and is inflicting them ${this.dmg} Points.`);
        victim.takeDamage(this.dmg);
    }
}
