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

// Version without forEach()
const amountEarnedByCountry = (countryName) => {
    const revenue = users.filter((user) => {
        return user.country === countryName;
    });
    return revenue.reduce((result, user) => {
        return result += user.revenue;
    }, 0);
};
/*
//France
const amountEarnedbyFrance = amountEarnedByCountry("France");
console.log(`Total amount earned by France: $${amountEarnedbyFrance / 100}`);

//Germany
const amountEarnedbyGermany = amountEarnedByCountry("Germany");
console.log(`Total amount earned by Germany: $${amountEarnedbyGermany / 100}`);

//USA
const amountEarnedbyUsa = amountEarnedByCountry("United States");
console.log(`Total amount earned by USA: $${amountEarnedbyUsa / 100}`);

//England
const amountEarnedbyEngland = amountEarnedByCountry("Great Britain");
console.log(`Total amount earned by England: $${amountEarnedbyEngland / 100}`);
*/

// Version with forEach()
const arr = ["France", "Germany", "United States", "Great Britain"];
arr.forEach((countryName) => {
    const amountEarned = amountEarnedByCountry(countryName);
    console.log(`Total amount earned by ${countryName}: $${amountEarned / 100}`);
});


//==============================================================================
/* Liste de tous les pays ou on a gagner de l'argent */

// filter all countries with revenue
const usersWithRevenue = users.filter((user) => {
    return user.revenue > 0;
});

// Fetch only country names
const listCountriesWithRevenue = usersWithRevenue.map((arr) => {
    return arr.country;
});

// Removing all duplicates from list
const removeDuplicates = [...new Set(listCountriesWithRevenue)];

// Reorder List Alphabetically
removeDuplicates.sort((a, b) => {
    return a === b ? 0 : a < b ? -1 : 1;
});
//console.table(removeDuplicates);

//==============================================================================
/* Quels sont nos 5 utilisateurs qui nous ont rapporté le plus d'agent ? */
// filter out all non french spenders
const frenchSpenders = usersWithRevenue.filter((user) => {
    return user.country === "France";
});

// sort them in decreasing order
frenchSpenders.sort((a, b) => {
    return a.revenue === b.revenue ? 0 : a.revenue > b.revenue ? -1 : 1;
});

// slice to keep the top 5
const top5 = frenchSpenders.slice(0, 5);
console.table(top5);


//==============================================================================
/* Gagnons-nous plus d'argent auprès des hommes, ou des femmes ? */
// split the db based on user.gender
const maleUsers = usersWithRevenue.filter((user) => {
    return user.sex === "M";
});

const femaleUsers = usersWithRevenue.filter((user) => {
    return user.sex === "F";
});

const totMaleSpending = maleUsers.reduce((count, user) => {
    return Math.floor((count += user.revenue) / 100);
}, 0);

const totFemaleSpending = femaleUsers.reduce((count, user) => {
    return Math.floor((count += user.revenue) / 100);
}, 0);

console.log(totMaleSpending > totFemaleSpending ? `Male Users spent more with $${totMaleSpending}` : `Female Users spent more with $${totFemaleSpending}`);


//==============================================================================
/* Sors-moi les utilisateurs ayant rapporté au moins 75€ */

const over75 = usersWithRevenue.filter((user) => {
    return user.revenue >= 7500;
});

//console.table(over75);


//==============================================================================
/* Parmi nos 100 premiers utilisateurs, quel est le pourcentage qui sont des clients payants ? */

const top100 = users.slice(0, 100);

const top100WithRevenue = top100.filter((user) => {
    return user.revenue;
});

const percentTop100Paying = top100WithRevenue.length + " %";
console.log(percentTop100Paying);
