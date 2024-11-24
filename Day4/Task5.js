function ans() {
  str = document.getElementById("text").value;
  new_arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] == Number(str[i]) + 1) {
      new_arr.push(str[i]);
    } else {
      new_arr.push(str[i]);
      new_arr.push(" ");
    }
  }
  document.write(new_arr.join(""));
}
