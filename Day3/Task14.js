function ans() {
  word = document.getElementById("text").value;
  max = 0;
  min = 1000;
  new_arr = [];
  let flag = 1;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == "-") {
      document.write("list contains negative no please enter positive no");
      flag = 0;
    }
  }
  if (flag == 1) {
    for (let i = 0; i < word.length+1; i++) { 
      if (i % 2 == 0) {   
        if (word[i] < min) {
          min = word[i];
        }
        if (word[i] > max) {
          max = word[i];
        }
      }
    }
    new_arr.push(max);
    new_arr.push(" ");
    new_arr.push(min);
    document.write(new_arr.join(" "));
  }
}
