//Instructions - We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
function sumAll(arr) {
  var sortedArr = arr.sort((a,b) => a-b);
  var firstNum = arr[0];
  var lastNum = arr[1];
  var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
  return sum;
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);
