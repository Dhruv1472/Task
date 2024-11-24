function ans() {
  word = document.getElementById('text').value;
  max = 0;
  min = 1000;
  new_arr = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] % 2 != 0) {
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
ans();
