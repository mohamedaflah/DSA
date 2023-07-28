function Desc(a){
    let swapped;
    do{
        swapped=false;
        for(let i=0;i<a.length;i++){
            if(a[i]<a[i+1]){
                let temp=a[i];
                a[i]=a[i+1];
                a[i+1]=temp
                swapped=true
            }
        }
    }while(swapped)
    return a;
}
let ar=Desc([23,76,12,90,87,23,41]);
console.log(ar);