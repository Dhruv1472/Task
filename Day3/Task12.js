function ans() {
  no = Number(document.getElementById("text").value);
  if (no < 0) {
    document.write("please enter positive no");
  } else {
    factor_array = [];
    for (let i = 0; i <= no; i++) {
      if (no > 0) {
        if (no % i == 0) {
          factor_array.push(i);
        }
      } else if (no == 0) {
        document.write("1");
      } else {
        document.write("please enter positive valid number");
        break;
      }
    }
  }
  document.write(factor_array);
}
