function ans() {
  
  word = document.getElementById('text').value;
  first_no = [];
  last_no = [];
  for (let i = 0; i < word.length; i++) {
    if (i < 2) {
      first_no.push(word[i]);
    }
    if (i == 3 || i == 4) {
      last_no.push(word[i]);
    }
  }
  final_first = Number(first_no.join(""));
  final_last = Number(last_no.join(""));
  sum = final_first + final_last;
  mul = 1;
  var sumlen = sum.toString();
  for (let i = 0; i < sumlen.length; i++) {
    mul = mul * Number(sumlen[i]);
  }
  for (let i = 0; i < sumlen.length; i++) {
    mulstring = mul.toString();
    if (mulstring.length > 1) {
      mul = 1;
      for (let i = 0; i < mulstring.length; i++) {
        mul = mul * Number(mulstring[i]);
      }
    }
  }
  document.write(mul);
}

