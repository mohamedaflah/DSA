function del(a,index){
    n=a.length;
    for(i=index-1;i<n;i++){
        a[i]=a[i+1];
    }
    n--;
    return a;
}
var ar=[1,42,41,32,4,87,13];
let newAr=del(ar,2);
console.log(...newAr);