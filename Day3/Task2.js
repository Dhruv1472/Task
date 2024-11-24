function ans() {
  var no = Number(document.getElementById("no").value);
  var count = 0;

  while (no > 0) { 
    count = count + 1;
    no = Math.floor(no / 10); 
  }
  document.write(count);
}
