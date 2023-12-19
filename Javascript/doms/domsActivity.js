const body=document.body

var colour=prompt("What's a colour you like?")
var num1=prompt("Type a number.")
var num2=prompt("Type a number.")

var heading1=document.querySelector("h1")
heading1.addEventListener("click",function(){
    if (num1.length>0 && colour.length>0 &&num2.length>0 ){
        body.style.color="orange"
        var calc=5
        var calcEle=document.createElement("h2")
        calcEle.innerText=calc
    }


})