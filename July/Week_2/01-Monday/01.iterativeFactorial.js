const computeFactorialIt = (n) => {
    let x = 1;
    let fact = 1;

    if (n < 0) {
        return 0;
    } else if (n === 0) {
        return 1;
    }

    for (let i = x; i <= n; i++) {
        fact = fact * i;
    }

    return fact;
}

console.log("computeFactorialIt(5): ", computeFactorialIt(5));
console.log("computeFactorialIt(0): ", computeFactorialIt(0));
console.log("computeFactorialIt(-1): ", computeFactorialIt(-1));
