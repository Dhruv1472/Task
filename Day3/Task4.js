function ans() {
  var no = Number(document.getElementById("no").value);

  for (i = 1; i <= 10; i++) {
    document.write(no + "x" + i + "=" + no * i + "<br>");
    // console.log("\n");
    // document.writeln();
  }
}
