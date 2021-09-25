const isItNumeric = number => (!isNaN(number) && number !== " ");
console.log(isItNumeric(12));
console.log(isItNumeric('abcd'));
console.log(isItNumeric(' '));
console.log(isItNumeric(1.20));
console.log(isItNumeric(-200));