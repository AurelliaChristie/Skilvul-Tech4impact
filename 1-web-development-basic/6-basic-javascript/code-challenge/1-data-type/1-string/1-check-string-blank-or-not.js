// Create a function to check whether a string is a blank or not
const is_Blank = text => {
    let result = "";
    if (text === ""){
        result = true;
    } else {
        result = false;
    }
    return result;
}

// Use the function
console.log(is_Blank(''));
console.log(is_Blank('abc'));