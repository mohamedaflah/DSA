let a=[1,2,3,4,5,6,4,12,24],sum=0,c=0;
for(let i=0;i<a.length;i++){
    if(a[i]%2==0 && a[i]%3==0){
        c++;
        sum=sum+a[i];
    }
}
let avg=sum/c;
console.log(avg," avergae")
