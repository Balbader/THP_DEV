/* Résous le sujet 2 avec une complexité algorithmique de O(n²), c'est-à-dire
 * que ton programme devra comparer chaque élément entre eux à l'aide
 * de 2 boucles imbriquées. */

const checkHeight = (numbers) => {
    let hasView = 0;
    let currentIsMax;

    for (let i = 0; i < numbers.length; i++) {
        currentIsMax = true;
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] >= numbers[i]) {
                currentIsMax = false;
                break;
            }
        }
        if (currentIsMax) {
            hasView++;
        }
    }
    return hasView;
}

const arr = [3, 7, 8, 3, 6, 1];
const arr2 = [1, 4, 5, 8];
console.log(checkHeight(arr));
console.log(checkHeight(arr2));
