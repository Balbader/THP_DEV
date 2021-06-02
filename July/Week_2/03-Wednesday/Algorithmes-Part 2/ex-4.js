/* Résous le sujet 2 avec une complexité algorithmique de O(n), c'est-à-dire
 * que ton programme pourra parcourir plusieurs fois chaque élément du tableau
 * (mais pas de boucle imbriquée !). */

const checkHeight = (arr) => {
    const temp = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            continue ;
        } else {
            temp.push(arr[i]);
        }
    }
    return temp.length;
}

const arr = [3, 7, 8, 3, 6, 1];
const arr2 = [1, 4, 5, 8];
console.log(checkHeight(arr));
console.log(checkHeight(arr2));
