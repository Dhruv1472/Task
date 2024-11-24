let fa = [{ path: "F/CODING/MV Clouds/Day4/Book1.csv", head: "CSV1" }];
for (let i = 0; i < fa.length; i++) {
  document.querySelector("#nav").innerHTML += `${fa[i].head}`;
  document.querySelector("body").innerHTML += `${fa[i].head}`;
  fetch(fa[i].path)
    .then((res) => res.text())
    .then((data) => {
      document.write("ff");
      let result = data.split(/\r?\n|\r/).map((e) => {
        return e
          .split(",")
          .map((td) => (td !== "" ? `${td}` : ""))
          .join("")
          .split("\n")
          .map((tr) => (tr !== "" ? `${tr}` : ""))
          .join("");
      });
      document.querySelector(`#tbody${i}`).innerHTML = result.join("");
    });
}
