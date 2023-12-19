var num=[1,2,3,4,5,324,63]
target=3

let ans=false
var position;
for (let i=0;i<num.length;i++){
    console.log(num[i])
    if (num[i]===target){
        ans=true
        position=i
    }
}
if (ans===true){
    console.log("taget is at position" + positon)
}
else{
    console.log("item is not in array")
}