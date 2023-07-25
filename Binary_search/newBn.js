function Srch(a,target){
    let start=0;
    let end=a.length-1;
    while(start<=end){
        let mid=(start+end)/2;
        mid=parseInt(mid);
      if(a[mid]==target){
        console.log(`Value Found at position ${mid}`);
      }
      if(target<a[mid]){
        end=mid-1;
      }else{
        start=mid+1;
      }
    }
  }
  Srch([1,2,3,4,5,6,7],6);