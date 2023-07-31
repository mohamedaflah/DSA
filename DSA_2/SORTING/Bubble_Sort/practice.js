var a = [
  43, 23, 53, 45, 232, 65, 56, 83, 2, 35, 3, 53, 32, 35, -6, -12, -32, -323,
];
for(let i=0;i<a.length;i++){
    for(let j=0;j<a.length-1-i;j++){
        if(a[j]>a[j+1]){
            let temp=a[j];
            a[j]=a[j+1];
            a[j+1]=temp;
        }
    }
}
console.log('After');
let sort=a.map((item)=>{
    return item;
})

console.log(sort);