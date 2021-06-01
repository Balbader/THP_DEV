const quicksort = (array) => {
    let count = 0;

    if (array.length <= 1) {
        return array;
    }

    const pivot = array[0];

    const left = []; 
    const right = [];

    for (let i = 1; i < array.length; i++) {
        array[i] > pivot ? right.push(array[i]) : left.push(array[i]);
        count++;
    }

    quicksort(left).concat(pivot, quicksort(right));
    return (`Tri rapide: ${count} comparaisons - ${array}`);
};

export default quicksort;
