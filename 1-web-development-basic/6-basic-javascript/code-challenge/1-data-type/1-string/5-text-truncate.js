const text_truncate = (str, length = 100, ending = "...") => {
    if (str.length > length){
        return `${str.slice(0,length)}${ending}`;
    } else {
        return `${str.slice(0,length)}`;
    }
}
console.log(text_truncate('We are doing JS string exercises.'));
console.log(text_truncate('We are doing JS string exercises.',19));
console.log(text_truncate('We are doing JS string exercises.',15,'!!'));