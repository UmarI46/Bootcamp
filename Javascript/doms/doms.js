const body=document.body
const head=document.head

const pageTitle=document.createElement('title')
pageTitle.innerText="Lesson 1 Doms"
head.append(pageTitle)

const smallParagraph=document.createElement('p')
smallParagraph.innerText= "lorem ipsum"
body.append(smallParagraph)

/*
const headingOne=document.getElementById('h1')
headingOne.innerText="Test"

const list=document.createElement("ol")
const item1=document.createElement("li")

item.innerText="bread"
const item2=document.createElement("li")

item.innerText="milk"
const item3=document.createElement("li")

item.innerText="chesse"
list.append(item1)
list.append(item2)
list.append(item3)
body.append(list)
*/

/* How to write an event listener

<element>.eventListener(<event>,changeTheme)
<element>.eventListener(<event>, function(){

})
*/
function changeTheme(){
    body.style.backgroundColor="Grey"
    heading2.style.color="White"
}
heading1.addEventListener('click',changeTheme)

var heading2=document.querySelector("h2")
heading2.addEventListener("click",function(){
    var name=prompt("what is your name?")
    if(name.length>0){
        changeTheme()
        console.log(name)
        var nameEl=document.createElement("h1")
        nameEl.innerText=name
        nameEl.style.color="blue"
        body.append(nameEl)
    }
})

