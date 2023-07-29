let a1=[3];
let a2=[-2,-1];
let myar=[...a1,...a2];
myar=myar.sort((a,b)=>{
    return a-b
})
console.log(myar);
if(myar.length%2!=0){
  console.log(myar[(myar.length-1)/2])
}else{
  console.log(((myar.length-1)/2))
 console.log(((myar[ ((myar.length-1)/2)+1])+(myar[ ((myar.length-1)/2)]))/2)
}
