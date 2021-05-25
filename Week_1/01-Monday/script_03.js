import users from "./users.js";

//==============================================================================
/* Quel est le chiffre d'affaires moyen par utilisateur ? */
const total = users.reduce((result, user) => {
    return result += user.revenue;
}, 0);

const averageRevenue = total / users.length;
console.log(`Average revenue per user: $${Math.floor(averageRevenue)}`);


//==============================================================================
/* Percentage of revenue superieur a 0 */
//console.log(overZero);
const overZero = users.reduce((result, user) => {
    return result += ((user.revenue > 0) ? 1 : 0);
}, 0);

const toPercent = (overZero / users.length) * 100;

console.log(`Percentage of revenue superior to 0: ${Math.floor(toPercent)}%`);


//==============================================================================
/* Parmi les utilisateurs ayant rapporté de l'argent, quel est le chiffre
 * d'affaires moyen d'un utilisateur ? */

//console.log("total users: ", users.length);
//console.log("total users with revenue: ", overZero);

const averageRevenue_2 = total / overZero;
console.log(`Average revenue per user with revenue: $${Math.floor(averageRevenue_2)}`);


//==============================================================================
/* Combien avons-nous gagné d'argent au total ? */

const franceUsers = users.filter((user) => {
    return user.country === "France";
});

const amountEarned = franceUsers.reduce((result, user) => {
    return result += user.revenue;
}, 0);

console.log(`Total amount earned by France: $${amountEarned}`);


//==============================================================================
/*Combien avons-nous d'utilisateurs en France ? */

const totFrenchUsers = franceUsers.length;
console.log(`Total number of France users: ${totFrenchUsers}`);


//==============================================================================
/* Parmi ces utilisateurs, combien avons-nous de clients payants en France ? */

const frenchPayingUsers = franceUsers.reduce((count, user) => {
    if (user.revenue > 0) {
        count++;
    }
    return count;
}, 0);

console.log(`French Paying Users: ${frenchPayingUsers}`);










