const computePowerIt = (n, p) => {
    let result = 1;

    if (p < 0) {
        return 0;
    }

    while (p > 0) {
        result = result * n;
        p--;
    }

    return result;
}

console.log("computePowerIt(5, 5): ", computePowerIt(5, 5));
console.log("computePowerIt(5, -1): ", computePowerIt(5, -1));
console.log("computePowerIt(-22, 2): ", computePowerIt(-22, 2));
