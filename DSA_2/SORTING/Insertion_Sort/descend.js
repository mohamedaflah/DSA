function ascend(ar){
    for(let i=1;i<ar.length;i++){
        let insert=ar[i];
        let j=i-1;
        while(j>=0 && ar[j] < insert){
            ar[j+1]=ar[j];
            j=j+1;
        }
        ar[j+1]=insert;
    }
    return ar
}
const sort=ascend([81,20,-2,4,-6]);
console.log(sort);