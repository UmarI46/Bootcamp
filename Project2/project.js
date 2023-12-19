var movieList=["interstellar","avengers","the bear","the walking dead","the dark knight","harry potter - philosopher stone", "hobbit" ,"tennet","nope","get out"]
//var movieList=[[0,"interstellar"],[1,"avengers"],[2,"the bear"],[3,"the walking dead"],[4,"the dark knight"],[5,"harry potter - philosopher stone"], [6,"hobbit"], [7,"tennet"],[8,"nope"],[9,"get out"]]
const body=document.body
const inputEle=document.getElementById("search")
const btnEle=document.getElementById("btn")
const cardsEle=document.getElementById("container")
//const displayEle=document.querySelector(".display")


// for (let i=0;i<movieList.length;i++){
//     console.log(movieList[i])
//     if (movieList[i]===target){
//         position=i
//     }}


//keyup probably isn't efficient but idc at this point
//should've turned it to "search" and had value be returned
inputEle.addEventListener("keyup",e =>{
    let value=e.target.value.toLowerCase()
    //button
    btnEle.addEventListener("click", function(e){
        //calls function    
        checked=InputChecker(value, "Search Term")
        //checks if input is in movie list
        if(checked==true){
            if (movieList.includes(value)){
                console.log(checked)
                cardsEle.children[0].classList.add("dontDisplay")
                cardsEle.children[1].classList.add("dontDisplay")
                cardsEle.children[2].classList.add("dontDisplay")
                cardsEle.children[3].classList.add("dontDisplay")
                cardsEle.children[4].classList.add("dontDisplay")
                cardsEle.children[5].classList.add("dontDisplay")
                cardsEle.children[6].classList.add("dontDisplay")
                cardsEle.children[7].classList.add("dontDisplay")
                cardsEle.children[8].classList.add("dontDisplay")
                cardsEle.children[9].classList.add("dontDisplay")
                for (let i=0;i<movieList.length;i++){
                    if (movieList[i]===value){
                        position=i
                        value=""
                    }}
                cardsEle.children[position].classList.toggle("dontDisplay")
                

                console.log("Here is your movie")
                console.log(value)
                checked=false
                console.log(checked)
            }
            else{
                console.log("Movie does not exist.")
                console.log(value)
            }
        }

        else{
            cardsEle.children[0].classList.remove("dontDisplay")
            cardsEle.children[1].classList.remove("dontDisplay")
            cardsEle.children[2].classList.remove("dontDisplay")
            cardsEle.children[3].classList.remove("dontDisplay")
            cardsEle.children[4].classList.remove("dontDisplay")
            cardsEle.children[5].classList.remove("dontDisplay")
            cardsEle.children[6].classList.remove("dontDisplay")
            cardsEle.children[7].classList.remove("dontDisplay")
            cardsEle.children[8].classList.remove("dontDisplay")
            cardsEle.children[9].classList.remove("dontDisplay")
        }
    })
})


// btnEle.addEventListener("click", function(e){
//     console.log("press")
//     inputEle.addEventListener("keyup",e =>{
//         let value=e.target.value
//         console.log(value)
//         InputChecker(value, "Search Term")
//         console.log(value)
//         })
// })


//checks if the input inserted is longer than 0
function InputChecker(value, element){
    if (value.length>0){
        console.log("Requirement met!")
        return(true)
    }
    else{
        console.log("Please input something")
        return(false)
    }
}
