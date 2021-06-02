/* Résous le sujet 1 avec une complexité algorithmique de O(n), c'est-à-dire
 * que ton programme pourra parcourir plusieurs fois chaque élément du tableau
 * (mais pas de boucle imbriquée !). */

const equalRes = (arr, res) => {
    let i = 0;
    while (i < arr.length) {
        let temp = arr[0];
        if (temp + arr[i] === res) {
            return (`The sum of ${temp} and ${arr[i]} in [${arr}] is equal to ${res}`);
        }
        i++;
        temp = arr[i];
    }
    return (`No combination in [${arr}] added up to ${res}.`);
}

console.log(equalRes([43, 55, 8, 4], 9));
console.log(equalRes([8, 3, 5, 1], 9));
