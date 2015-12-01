function diff(arr1, arr2) {
  var filtered1 = arr1.filter(function(item) {
    return arr2.indexOf(item) < 0 ? true : false;
  });
  var filtered2 = arr2.filter(function(item) {
    return arr1.indexOf(item) < 0 ? true : false;
  });
  return filtered1.concat(filtered2);
}

diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diff(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
diff([], ["snuffleupagus", "cookie monster", "elmo"]);
diff([1, "calf", 3, "piglet"], [7, "filly"]);
