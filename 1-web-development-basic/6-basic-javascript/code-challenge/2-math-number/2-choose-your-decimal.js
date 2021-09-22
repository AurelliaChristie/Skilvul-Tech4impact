const chooseDecimals = (n,d) => {
    if ((typeof n !== Number) || (typeof d !== Number)) {
        return "Your input is not a number";
    } else{
        return n.toFixed(d);
    }
} 
console.log(chooseDecimals(2.100212, 2));
console.log(chooseDecimals(2.100212, 3));
console.log(chooseDecimals(2100, 2));