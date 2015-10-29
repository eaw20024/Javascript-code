function where(arr, num) {
  arr.sort(function(a, b) {
    return a -b;
  });
  
  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
    return parseInt(a);
  }
  
  return arr.length;
}

console.log(where([40, 60], 50));
console.log(where([10, 20, 30, 40, 50], 35);
console.log(where([10, 20, 30, 40, 50], 30);
console.log(where([5, 3, 20, 3], 5));
console.log(where([2, 20, 10], 19));
console.log(where([2, 5, 10], 15));