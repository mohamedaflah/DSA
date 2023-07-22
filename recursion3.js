const myAr=[];
const Loop=(startNum,endNum)=>{
    if(startNum>endNum) return;
    if(startNum<=endNum){
        myAr.push(startNum)
        startNum++;
    }
    Loop(startNum,endNum)
    return myAr

}
console.log(Loop(3,10))
