function truncate(str, num) {
  //Write an if-else statment to test the length of the full string passed 
  // in as a first argument already fits within the size limit passed in the 2nd arg
  if (str.length <= num)
    return str;
  //Check to see if if-else statment fits into our special case, where its desired length
  //is less than or equal to three
  if (num <= 3)
    return str.substr(0, num) + "..."
 //Write the return for what happens when neither of the previous if-statements have been true   
   return str.substr(0, num - 3) + "...";
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
truncate("Peter Piper picked a peck of pickled peppers", 14);
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncate("A-", 1);