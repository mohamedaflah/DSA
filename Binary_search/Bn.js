// function BinaryS(ar,target){
//     let startIdx=0;
//     let endIndx=ar.length-1;
//     while(startIdx <= endIndx){
//         var middle=startIdx+(endIndx-startIdx)/2;
//         if(ar[middle] == target){
//             return middle;
//         }else if(ar[middle] > target){
//             endIndx=middle-1;
//         }else if(ar[middle] > target){
//             startIdx=middle+1;
//         }
//     }
//     return -1;
// }
// var a=[1,2,3,4,5,6,7,8,9,10];
// console.log(BinaryS(a,3));
function Bn(ar,target){
    let start=0;
    let end=ar.length-1;
    while(start<=end){
        let mid=(start+end)/2;
        if(ar[mid]==target){
            console.log(`Value Found At Position ${mid} `);
            break;
        }else if(ar[mid]>target){
            end=mid-1;
        }else{
            start=mid+1;
        }
    }
}
var a=[1,2,3,4,5,6,7,8,9,10];
Bn(a,4);