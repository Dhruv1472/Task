dict = { ff: 1 };
// console.log(dict)
dict["ko"] = 1;
console.log(dict);
console.log(dict["ff"]);
val = dict["ff"];
dict["ff"] += 1;
console.log(dict);
// for(let d=0;d<dict.length;i++){
//     dict[d]=0
// }
var key=Object.keys(dict)
for (let i=0;i<key.length;i++){
    dict[key[i]]=0
}
console.log(dict);
