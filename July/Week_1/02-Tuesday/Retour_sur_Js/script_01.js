const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

//==============================================================================
/* EX-1: Sors une array qui ne contient que le nom et le prenom */
/*
const temp = [];

for (let i = 0; i < entrepreneurs.length; i++) {
    // create a copy of entrepreneurs[] array without referencing the entrepreneurs[] array itself
    // This will allow to alter the temp[] without altering the entrepreneurs[] array
    temp.push({...entrepreneurs[i]});
}

for (let i = 0; i < temp.length; i++) {
    delete temp[i].year;
}
console.log(temp);
*/
const temp = entrepreneurs.map((entrepreneur) => {
    return {...entrepreneur};
});

temp.forEach((entrepreneur) => {
    delete entrepreneur.year;
});
//console.log(temp);


//==============================================================================
/* EX-2: Pour chaque entrepreneur, remplace la date de naissance par l'âge de
        l'entrepreneur qu'il aurait aujourd'hui. */

//const newObject = {age: currentYear - entrepreneur.year}
const currentYear = new Date().getFullYear();
let currentAge;
const newArr = entrepreneurs.map((entrepreneur) => {
    const res = {...entrepreneur, age: currentYear - entrepreneur.year};
    delete res.year;
    return res;
});
//console.log(newArr);


//==============================================================================
/* EX-3: Les clés first et last manquent de lisibilité,
 * remplace-les par firstName et lastName */

const changePropName = newArr.map((entrepreneur) => {
    const {first, last, ...rest} = entrepreneur;
    return {firstName: first, lastName: last, ...rest};
});

//console.log(changePropName);


//==============================================================================
/* EX-4: Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 */

const filterAge = entrepreneurs.filter((entrepreneur) => {
    return (entrepreneur.year >= 1970) && (entrepreneur.year < 1980)
});

console.log(filterAge);
