/* Résous le sujet 1 en ne faisant qu'un seul passage sur ta liste.
   Si tu réussis cet exercice, sache qu'il a été posé en entretien par Google.
   Tu peux postuler à Google. La classe, non ? */

const equalRes = (arr, res) => {
    let firstArrElem;
    let lastArrElem;
    let temp;

    let i = 0;
    let j = arr.length - 1;

    //create a new Object instance
    const newObj = {};
    const sortedArr = arr.sort();

    while (i !== j) {
        firstArrElem = sortedArr[i];
        lastArrElem = sortedArr[j];
        temp = firstArrElem + lastArrElem;

        if (temp === res) {
            newObj[firstArrElem + '-' + lastArrElem] = true;
            i++;
            j--;
        } else if (temp > res) {
            j--;
        } else {
            i++;
        }
    }
    console.log(Object.keys(newObj));
}

console.log(equalRes([43, 55, 8, 4], 9));
console.log(equalRes([8, 3, 5, 1], 9));
