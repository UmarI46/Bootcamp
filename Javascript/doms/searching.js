const body =document.body
const list=document.querySelector("ul")
const btn=document.querySelector("button")

btn.addEventListener("click",function(){
    const input= document.getElementById("newCar")

    const array=[]

    for (let i=0;i<list.children.length;i++){
        //console.log(list.children[i].innerHTML)
        array.push(list.children[i].innerHTML)
    }

    if (input.value.length>0){
        console.log(input.value)
        if (array.includes(input.value.toLowerCase())){
            alert(`${input.value} is already in list`)
        }
        else{
            const newItem=document.createElement("li")
            newItem.innerText=input.value
            list.append(newItem)

        }
    }
})