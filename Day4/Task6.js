function processWords() {
  const fileInput = document.getElementById("fileInput");
  const outputDiv = document.getElementById("output");

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const data = event.target.result;
    const words = data.split(" ");
    let dict = {};

    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
        const char = words[i][j];
        if (dict[char]) {
          dict[char] += 1;
        } else {
          dict[char] = 1;
        }

        if (dict[char] === 2) {
          let indices = [];
          for (let k = 0; k < words[i].length; k++) {
            if (words[i][k] === char) {
              indices.push(k);
            }
          }

          const wordOutput = `<p>${words[i]} -- ${char} -> ${indices.join(
            ", "
          )}</p>`;
          outputDiv.innerHTML += wordOutput;
        }
      }
      Object.keys(dict).forEach((key) => (dict[key] = 0));
    }
  };
  reader.readAsText(file);
}