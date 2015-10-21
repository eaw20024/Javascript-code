function reverseString(str) {
  
  var reverse = str.split('').reverse().join('');
  
  return reverse;
  
}

reverseString("hello");
reverseString("Howdy");
reverseString("Greetings from Earth");