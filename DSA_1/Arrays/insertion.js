function insertion(a,value,index){
    for(let i=a.length-1;i>=index-1;i--){
        a[i+1]=a[i];
    }
    a[index-1]=value;
    return a;
}
var ar=[1,2,42,12,53,32,54];
let newAr=insertion(ar,230,5);
console.log(...newAr);
