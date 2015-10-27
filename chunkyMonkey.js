function chunk(arr, size) {
  //Created a loop to store the smaller loops
  var newArray = [];
  //Loop through the length of the array
  //i adds based on the size in the array 
  //Slice method extracts a portion of an array and returns a copy into a new array
  for (var i = 0; i < arr.length; i += size) {
    newArray.push(arr.slice(i, i + size));
  }
  //Push the array out
  return newArray;
}

chunk(["a", "b", "c", "d"], 2);
chunk([0, 1, 2, 3, 4, 5], 3);
chunk([0, 1, 2, 3, 4, 5], 2);
chunk([0, 1, 2, 3, 4, 5], 4);