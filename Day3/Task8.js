function ans(){
    word=document.getElementById('text').value; 
    count=0
    for(let i=0;i<word.length;i++){
        if(word[i]=='a' || word[i]=='e' || word[i]=='i' || word[i]=='o' || word[i]=='u'){
            count=count+1
        }
    }
    document.write(count)
}
