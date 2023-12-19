// write a function, it must:
// get an input (or preset a variable)
// turn string into an array
//append the string, in reverse order, to another array
// turn the array into a string using the join command

let stringReverseInp = ("test");

function stringReverse(string){
let arrayInp=[]
var reverseArray=[]
for (let index=0; index<stringReverseInp.length;){
    arrayInp.push(stringReverseInp[index])
    index= index + 1
   
}
// could've done stringReverseInp.split("") to turn a string into an array in one go
for (let index=-1; index>(arrayInp.length*-1)-1;){
    reverseArray.push(arrayInp[arrayInp.length + index])
    index= index -1
}
// console.log(arrayInp.reverse()) This would have saved doing this for loop for the reversal
let reverse=reverseArray.join("")
if (reverse===stringReverseInp){
    console.log("This is a palindrome")
}
else{
    console.log("This is NOT a palindrome")
}
}


stringReverse(stringReverseInp)

//write a function which combines arrays
var arrayA=[1,2,3]
var arrayB=[4,5,6]
function combine(array1,array2){
    var combined= array1.concat(array2)
    console.log(combined)
}
combine(arrayA,arrayB)