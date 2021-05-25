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

console.log(`Total amount earned by France: $${amountEarned / 100}`);


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


//==============================================================================
/* Donne-moi le chiffre d'affaires réparti dans nos 4 pays les plus représentés
 * (Allemagne, États-Unis, France, Grande-Bretagne)
 * (chiffre d'affaires total, en France, aux États-Unis, etc.) */

//France
const franceRevenue = users.filter((user) => {
    return user.country === "France";
});

const amountEarnedbyFrance = franceRevenue.reduce((result, user) => {
    return result += user.revenue;
}, 0);

console.log(`Total amount earned by France: $${amountEarnedbyFrance / 100}`);

//Germany
const germanyRevenue = users.filter((user) => {
    return user.country === "Germany";
});

const amountEarnedbyGermany = germanyRevenue.reduce((result, user) => {
    return result += user.revenue;
}, 0);

console.log(`Total amount earned by Germany: $${amountEarnedbyGermany / 100}`);

//USA
const usaRevenue = users.filter((user) => {
    return user.country === "United States";
});

const amountEarnedbyUsa = usaRevenue.reduce((result, user) => {
    return result += user.revenue;
}, 0);

console.log(`Total amount earned by USA: $${amountEarnedbyUsa / 100}`);

//England
const englandRevenue = users.filter((user) => {
    return user.country === "Great Britain";
});

const amountEarnedbyEngland = englandRevenue.reduce((result, user) => {
    return result += user.revenue;
}, 0);

console.log(`Total amount earned by France: $${amountEarnedbyEngland / 100}`);


//==============================================================================
/* Liste de tous les pays ou on a gagner de l'argent */
// filter all countries with revenue
const countriesWithRevenue = users.filter((user) => {
    return user.revenue >  0;
});

// Fetch only country names
const listCountriesWithRevenue = countriesWithRevenue.map((arr) => {
    return arr.country;
});

// Removing all duplicates from list
const removeDuplicates = [...new Set(listCountriesWithRevenue)];

// Reorder List Alphabetically
removeDuplicates.sort((a, b) => {
    return a === b ? 0 : a < b ? -1 : 1;
});
console.table(removeDuplicates);

//==============================================================================
/* Quels sont nos 5 utilisateurs qui nous ont rapporté le plus d'agent ? */


























