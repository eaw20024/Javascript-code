function palindrome(str) {
  //Use regular expressions to replace any uppercase letter into a lowercase letter
  var normalizedStr = str.replace(/[\W_]/g, '').toLowerCase();
  //Check to see if the string is the same as the reversed string using split method
  var reverseStr = normalizedStr.split('').reverse().join('');
  //Reverse the string and join it back together
  return normalizedStr === reverseStr;
}

palindrome("eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");