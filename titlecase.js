function titleCase(str) {
  //Used RegEx to look for specific characters in a given string
  return str.replace(/\w\S*/g, function(txt) {
    //Capitalize evry first character in a string and lowercase the other characters
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");