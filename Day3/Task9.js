function ans(){
    word=document.getElementById('text').value;  
    for(let i=0;i<word.length;i++){
        if(word[i]==word[i].toUpperCase()){
            document.write(word[i])
        }
    } 
    for(let i=0;i<word.length;i++){
        if(word[i]==word[i].toLowerCase()){
            document.write(word[i])
        }
    } 
    
}
