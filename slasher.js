function slasher(arr, howMany) {
  if (arr.length <= howMany) {
   return [];   
  } else if (howMany < 1) {
   return arr;   
  }
  return arr.slice(howMany);
}

console.log(slasher([1, 2, 3], 2));
console.log(slasher([1, 2, 3], 0));
console.log(slasher([1, 2, 3], 9));
console.log(slasher([1, 2, 3], 4));