function destroyer(arr) {
   var mustRemove = [];
   for (var i = 1; i < arguments.length; i++) {
     mustRemove.push(arguments[i]);
   }
  return arr.filter(function(item) {
    if (mustRemove.indexOf(item) >= 0) {
      return false;
    } else {
      return true;
    }
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));