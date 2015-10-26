function end(str, ending) {
  if (str.substr(-ending.length) == ending) {
    return true;
  } else {
    return false;
  }
  return str;
}

end("Bastian", "n");
end("Connor", "n");
end("Walking on water and developing software from a specification are easy if both are frozen.", "specification");
end("He has to give me a new name", "name");
end("He has to give me a new name", "me");