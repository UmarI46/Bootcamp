const body =document.body
const form= document.querySelector("form")
const fNameEl= document.getElementById("fname")
const lNameEl= document.getElementById("lname")
const emailEl= document.getElementById("email")

form.addEventListener("submit", function(e){
    e.preventDefault()
    var checkFirstName=checkName(fNameEl, "First Name")
    var checkLastName=checkName(lNameEl, "Last Name")
    var checkEmailInp=checkEmail(emailEl, "EMail")

    if (checkFirstName===true && checkLastName===true){
        alert("Successful log-in")
    }
    
})

function checkEmail(input, element){
    var passes=false
    var condition=false 
    if (input.value.length>0 ){
        console.log("meets length requirement")
        condition=true
    }
    else{
        errorMessage("does not meet length requirement",element)
    }

    const regEx= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const checkString=regEx.test(input.value)

    if (condition===true && checkString===true){
        passess=true
    }

    return passes 
}

function checkName(input, element){
    var passes=false
    var condition=false 
    if (input.value.length>0 && input.value.length<15){
        console.log("meets length requirement")
        condition=true
    }
    else{
        errorMessage("does not meet length requirement",element)
    }

    const regEx= /[a-zA-Z]/
    const checkString=regEx.test(input.value)

    if (condition===true && checkString===true){
        passess=true
    }

    return passes 
}

function errorMessage(text,element){
    console.log(`${element}: ${text}`)
}