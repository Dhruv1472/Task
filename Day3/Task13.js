function ans() {
  word=document.getElementById("text").value;
  new_array=[]
  for(let i=0;i<word.length;i++){
    if(word.charCodeAt(i)%2==0){
          new_array.push(word[i].toUpperCase())
    }
    else{
        new_array.push(word[i].toLowerCase())
    }
  }
  document.write(new_array.join(""))
}
 
