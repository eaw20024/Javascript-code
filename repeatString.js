function repeat(str, num) {
  //Created a string to stor the variable
  var newstr = [];
  //Create a loop to repeat the code as many times as needed
  for (var i = 0; i < num; i++) {
    newstr.push(str);
  };
  //Make the variable created store the current value and append the word to it
  return newstr.join('');
}

repeat("*", 3);
repeat("abc", 3);
repeat("abc", -2);