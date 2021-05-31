const computePowerRec = (n, p) => {

    if (p >= 0) {
        return n * computePowerRec(n, p - 1);
    } else if (p < 0) {
        return 0;
    } else {
        return 1;
    }
}

console.log("computePowerRec(5, 5): ", computePowerRec(5, 5));
console.log("computePowerRec(5, -1): ", computePowerRec(5, -1));
console.log("computePowerRec(-22, 2): ", computePowerRec(-22, 2));
