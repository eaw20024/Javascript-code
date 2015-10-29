function mutation(arr) {
    //loop through the first string, and check letter by letter, check 
    //if they are present in the first string 
    for (var i = 0; i < arr[1].length; i++) {
    //Have to make sure that letters are lowercase to make it easier to find matches
        if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) < 0) {
            return false;
        }
    }
    return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["floor", "for"]));
console.log(mutation(["hello", "neo"]));