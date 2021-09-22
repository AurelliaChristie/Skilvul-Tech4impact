const capitalize = text => {
    let split_text = text.split(" ");
    split_text[0] = split_text[0][0].toUpperCase() + split_text[0].slice(1);
    return split_text.join(" ");
}

console.log(capitalize('javascript adalah sebuah bahasa pemrograman yang sangat powerful'));