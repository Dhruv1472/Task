function ans() {
  var word = document.getElementById("text").value;
  if (word.includes("ee")) {
    document.write("contains");
  } else {
    document.write("does not contain");
  }
}
