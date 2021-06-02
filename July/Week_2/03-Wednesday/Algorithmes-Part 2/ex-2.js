/* Résous le sujet 2 avec une complexité algorithmique de O(n²), c'est-à-dire
 * que ton programme devra comparer chaque élément entre eux à l'aide
 * de 2 boucles imbriquées. */

const checkHeight = (arr) => {
    const temp = []
    let index = 0;
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
