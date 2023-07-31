var array=[43, 23, 523, 534, 54, 21, 32, 56, 35, 26, 78, 54];
for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i]>array[j]){
            let temp=array[i];
            array[i]=array[j];
            array[j]=temp;
        }
    }
}
console.log(array);