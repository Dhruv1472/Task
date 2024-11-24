function ans() { 
  var no =Number(document.getElementById('no').value);
  var temp=no;
  sum=0
  count=no.toString.length+1
  while(temp>0){
    rev=temp%10
    sum=sum+rev*(10**count)
    count=count-1
    temp=Math.floor(temp/10)    
    
  } 
  if(sum>no){
    document.write("true")
  }
  else{
    document.write("false")
  }
} 
