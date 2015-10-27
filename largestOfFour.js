function largestOfFour(arr) {
  //Create a variable to store the results as an array.
  var results = [];
  //Create an outer loop to iterate through the main array.
  for (var n = 0; n < arr.length; n++) {
  //Before going into the inner loop, create a variable to hold the largest number. This must be outside the inner loop.
    var largestNumber = 0;
   //Create another for loop to work with the sub-arrays.
    for (var sb = 0; sb < arr[n].length; sb++) {
   //Check if the element of the sub array is larger than the current largest number. If so, then save the number.
      if (arr[n][sb] > largestNumber) {
   //After the inner loop, save the largest number in the variable for the results.
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }

  return results;
}
