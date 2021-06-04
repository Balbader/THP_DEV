/* Résous le sujet 1 avec une complexité algorithmique de O(n²), c'est-à-dire
 * que ton programme devra comparer chaque élément entre eux à l'aide
 * de 2 boucles imbriquées.*/

const equalRes = (arr, res) => {
    const resultArray = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === res) {
                resultArray.push(i);
                resultArray.push(j);
                return (`The sum of ${arr[i]} and ${arr[j]} in [${arr}] is equal to ${res}`);
            }
        }
    }
    if (resultArray.length > 0) {
        return resultArray;
    } else {
        return (`No combination in [${arr}] added up to ${res}.`);
    }
}

console.log(equalRes([43, 55, 8, 4], 9));
console.log(equalRes([8, 3, 5, 1], 9));

