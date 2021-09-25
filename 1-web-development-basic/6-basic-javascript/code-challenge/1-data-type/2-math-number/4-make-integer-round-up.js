const roundUpToFive = number => {
    if (typeof number !== "number") {
        return "Your input is not a number";
    } else{
        return Math.ceil(number/5)*5;
    }
}

console.log(roundUpToFive(32));
console.log(roundUpToFive(137));
console.log(roundUpToFive(142));