function ans() {
  no = Number(document.getElementById("text").value);
  factor_array = [];
  for (let i = 0; i <= no; i++) {
    if (no % i == 0) { 
      factor_array.push(i);
    }
  }
  document.write(factor_array);
}
