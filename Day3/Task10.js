function ans() {
  word = document.getElementById("text").value;
  no_arr = [];
  for (let i = 0; i < word.length; i++) {
    no_arr.push(word.charCodeAt(i));
  }
  arraysort();
}
function arraysort() {
  for (let i = 0; i < no_arr.length; i++) {
    for (let i = 0; i < no_arr.length; i++) {
      if (no_arr[i] > no_arr[i + 1]) {
        var temp = no_arr[i];
        no_arr[i] = no_arr[i + 1];
        no_arr[i + 1] = temp;
      }
    }
  }
  var final_arr = [];
  for (let i = 0; i < no_arr.length; i++) {
    final_arr.push(String.fromCharCode(no_arr[i]));
  }
  document.write(final_arr.join("")); 
}
ans();
