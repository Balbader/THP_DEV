const computeFactorialRec = (n) => {

    if (n < 0) {
        return 0;
    } else if (n === 0) {
        return 1;
    } else
        return n * computeFactorialRec(n - 1);
}

console.log("computeFactorialRec(5): ", computeFactorialRec(5));
console.log("computeFactorialRec(0): ", computeFactorialRec(0));
console.log("computeFactorialRec(-1): ", computeFactorialRec(-1));

