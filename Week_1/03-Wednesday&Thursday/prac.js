/* ========================== Create a player ================================*/
class Player {
    constructor(name, hp, dmg, mana) {
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
    }
}

const player_1 = new Player("basil", 20, 10, 30, 50);
const player_2 = new Player("mimi", 40, 2, 45,  150);

/*
console.log(player_1);
console.log(player_2);
*/


class NewPlayer extends Player {
    constructor(name, hp, dmg, mana, sex) {
        super(name, hp, dmg, mana);
        this.sex = sex;
    }

    introduceNewPlayer() {
        return `I am ${this.name}, I have ${this.hp} hp points, ${this.dmg} dmg points, ${this.mana} mana points and I am a ${this.sex}.`;
    }
}

const player_3 = new NewPlayer("Thanos", 100, 200, 500, "male");
/*
console.log(player_3.introduceNewPlayer());
console.log(player_1.name);
console.log(player_2.name);
console.log(player_3.name);
*/


/* ========================== Create a Dungeon ===============================*/
class Dungeon {
    constructor(advisedLevel, maxNbrOfPlayer, state) {
        this.advisedLevel = 25;
        this.maxNbrOfPlayer = 10;
        this.state = "On going";
    }

    killBoss() {
        this.state = "Defeated";
        console.log("The Boss is dead! Well Played");
    }
}

class BlackrockDepths extends Dungeon {
    constructor(timeOfArrival, totPlayerNbr, advisedLevel, maxNbrOfPlayer, state) {
        super(advisedLevel, maxNbrOfPlayer, state);
        this.timeOfArrival = timeOfArrival;
        this.totPlayerNbr = totPlayerNbr;
    }
}

const instance_1 = new BlackrockDepths("12h33", 4);
const instance_2 = new BlackrockDepths("23h57", 2);

/*
console.log(instance_1);
instance_1.killBoss();
console.log("state: ", instance_1.state);

console.log("\n");

console.log(instance_2);
instance_2.killBoss();
console.log("state: ", instance_2.state);
*/

/* ========================== Destructuring an Object ========================*/
/*
const me = {
    name: 'Félix',
    age: 29,
    job: 'entrepreneur',
    whereJob: 'The Hacking Project'
};j


// This is the best approach
const { name, age, job, whereJob } = me;
console.log(`Hi! My name is ${name}, I'm ${age}, french ${job} in ${whereJob}`);

// Renaming a property
const { name: firstName, age, job, whereJob } = me;
console.log(firstName);
*/


/* ========================== setInterval() ========================*/

let helloCount = 0

const sayHello = () => {
    console.log("Hello");
    helloCount += 1;

    if (helloCount >= 10) {
        console.log("OK, I'm stopping :D");
        clearInterval(sayHelloEverySecond)
    }
}

// Affiche "Hello" dans la console, toutes les secondes pendant 10 secondes :
const sayHelloEverySecond = setInterval(sayHello, 1000);






















