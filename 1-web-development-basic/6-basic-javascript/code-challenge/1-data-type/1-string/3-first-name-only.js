const firstNameOnly = full_name => {
    let first_name = "";
    let split_name = full_name.split(" ");
    if (split_name.length > 1){
        first_name = `${split_name[0]} ${split_name[1].charAt(0)}.`;
     
    } else {
        first_name = full_name;
    }
    return first_name;  
}

console.log(firstNameOnly("David Winalda"));