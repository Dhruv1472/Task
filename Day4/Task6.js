function processWords() {
  dict = {};
//   document.write("ko");
  var fs = require("fs");
  var data = fs.readFileSync("abc.txt", "utf-8");
  const words = data.split(" ");
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] in dict) {
        dict[words[i][j]] += 1;
      } else {
        dict[words[i][j]] = 1;
      }
      var find = words[i][j];
      ind_arr = [];
      if (dict[words[i][j]] == 2) {
        for (let k = 0; k < words[i].length; k++) {
          if (words[i][k] == find) {
            ind_arr.push(k);
          }
        }
        // document.write(words[i] + "--");
        // document.write(words[i][j] + "->" + ind_arr);
        console.log(words[i] + "--");
        console.log(words[i][j] + "->" + ind_arr);
      }
    }
    var key = Object.keys(dict);
    for (let i = 0; i < key.length; i++) {
      dict[key[i]] = 0;
    }
  }
}
processWords();
