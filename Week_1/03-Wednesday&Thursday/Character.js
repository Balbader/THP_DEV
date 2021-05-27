const LOSER = "Loser";
const WINNER = "Winner";
const PLAYING = "Playing";

class Character {
    constructor(hp, dmg, mana, state = PLAYING, name) {
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.state = state;
        this.name = name;
    }

    /* Function to check Player life status*/
    isAlive() {
        if (this.hp > 0) {
            return true;
        } else {
            this.state = LOSER;
            return false;
        }
    }

    /* Function to take damage and check damage level(a.k.a dead or alive?) */
    takeDamage(damage) {
        if (this.isPlayerAlive()) {
            this.hp -= damage;
            console.log(`${this.name} have ${this.hp} Health Points remaining.`);
        } else {
            this.state = LOSER;
            console.log(`${this.name} is dead :(`);
        }
    }

    /* Function to inflict damage */
    dealDamage(victim) {
        console.log(`${this.name} is attacking ${victim.name} and is inflicting them ${this.dmg} Points.`);
        if (victim.isPlayerAlive()) {
            victim.hp -= this.dmg;

            if(victim <= 0) {
                victim.state = LOSER;
                console.log(`${this.name} killed ${victim.name}. ${this.name} won 20 mana points.`);
                this.winMana();
            }
            return this.dmg;
        } else {
            console.log("Player is dead. Can't run attack.")
        }
    }

    /* Re-initiate original mana points for next turn and add 20 mana points to winner */
    winMana() {
        this.mana += 20;
        let playerCategory;
        if (playerClass === 'Assassin') {
            if (this.mana >= 20){
                this.mana = 20;
            }
        }
        if (playerClass === 'Berzerker') {
            if (this.mana > 0){
                this.mana = 0;
            }
        }
        if (playerClass === 'Fighter') {
            if (this.mana >= 40){
                this.mana = 40;
            }
        }
        if (playerClass === 'Monk') {
            if (this.mana >= 200){
                this.mana = 200;
            }
        }
        if (playerClass === 'Paladin') { 
            if (this.mana > 160){
                this.mana = 160;
            }
        }
        return this.mana;
    }
}

// Initiate empty array to store new charachters for each turn
Character.instances = [];

// Look for characters still alive during current turn
Character.findPlayersStillAlive = () => {
    return Character.instances.filter((player) => {
        player.state === PLAYING;
    });
}

// Randomly creating new team with random order
Character.selectRandomPlayer() {
    let newTeamPlayers = Character.instances.filter((player) => {
        player.state != LOSER;
    });
    return newTeamPlayers.sort(() => Math.random() - 0.5);
}
