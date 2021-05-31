const computePowerRec = (n, p) => {

    if (p != 0) {
        return n * computePowerRec(n, p - 1);
    } else
        return 1;
}

console.log("computePowerRec(5, 5): ", computePowerRec(5, 5));
