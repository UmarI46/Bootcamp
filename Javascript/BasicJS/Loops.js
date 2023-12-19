/*let num=101
if(num>-1 && num<101){
    if(num%3==0 && num%5==0){
        num="FIZZBUZZ!"
        console.log(num)
    }
    else if(num%3==0){
        num="Fizz"
        console.log(num)
        }
    else if(num%5==0){
        num="Buzz"
        console.log(num)
    }
    else{
        console.log(num)
    }
}
else if(num<0){
    console.log("number is too small")
}
else{
    console.log("number is too large")
}*/
for (let index=0;index<=100;index++){
    if(index%3==0 && index%5==0 && index!==0){
        
        console.log("FIZZBUZZ!")
    }
    else if(index%3==0){
        
        console.log("Fizz")
        }
    else if(index%5==0){
        
        console.log("Buzz")
    }
    else{
        console.log(index)
    }
}
/*
let index =0
while(){
    index++
}*/
