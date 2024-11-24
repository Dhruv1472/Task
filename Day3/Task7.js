function ans() {
  no = document.getElementById('no').value;
  new_arr = [];
  new_arr2 = [];
  for (let i = 0; i < no.length; i++) {
    new_arr.push(no[i]);
  }
  if (new_arr[0] == 0) {
    for (let i = 0; i < new_arr.length; i++) {
      if (new_arr[i] == 0) {
        new_arr.shift();
      }
    }
  } else if (new_arr[new_arr.length - 1] == 0) {
    for (let i = new_arr.length; i > 0; i--) {
      if (new_arr[i] == 0) {
        new_arr.pop();
      }
    }
  }
  document.write(new_arr.join(""));
}
 