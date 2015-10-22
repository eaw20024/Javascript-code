function findLongestWord(str) {
  //split string into array of words -- Make sure to put a space in between the single quotes
  var words = str.split(' ');
  //Declare a variable to keep track of the maximum length
  var maxLength = 0;
  
  //Loop from 0 to the length of the array of words
  for (var i = 0; i < words.length; i++){
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  //At the end of the loop just return the number value of the variabale maxLength
  return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("May the force be with you");
findLongestWord("Google do a barrel roll");
findLongestWord("What is the average airspeed velocity of an unladen swallow");
findLongestWord("What if we try a super-long word such as otorhinolaryngology");