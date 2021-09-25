const rand = (min, max) => {
    if (max === 0 || max == null){
        if (min === 0 || min == null){
            return 0;
        } else {
            max = min;
            min = 0;
        }
    }  
    return Math.floor(Math.random()*max) + min;
}

console.log(rand(20,1));
console.log(rand(1,10));
console.log(rand(6));
console.log(rand());