function Buble(ar) {
    for(let i=0;i<ar.length;i++){
        for(let j=1;j<ar.length-i;j++){
            if(ar[j-1]>ar[j]){
                let temp=ar[j];
                ar[j]=ar[j-1];
                ar[j-1]=temp;
            }
        }
    }
    return ar;
}
let a=Buble([43, 12, 42, 51, 63, 6, 3, 4, 5]); 
console.log(a);
