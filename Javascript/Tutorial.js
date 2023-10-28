//First introduction to JS
console.log("Hello World")

//All variable types

//Is an unchangable variable
const Name=("Umar")
//Global variable
var Food=("Cookie")
//Local Variable
let Lettuce=("Lettuce")

console.log(Name==Food)
//These quote marks allow for a variable to be named in line when put in a ${}
//this is known as a string interpelation
console.log(`My name is ${Name}`)

//Equvilant to, == and ===
let Num=(1)
let Letter=("1")

//compares these 2 together, doesn't check if they're the same data type
console.log(Num==Letter)

//compares like in python
console.log(Num==Letter)

// && means and
// || means or 

/* The way to setup an elif statement
if(){

}
else if(){

}
else{

}
*/

//An example of switch cases, like yandere dev should've used

var DayOfTheWeek="Tuesday"

switch(DayOfTheWeek){
    case "Monday":
        console.log("Placement text for what I'd do this day.")
        break;
    case "Tuesday":
        console.log("Placement text for what I'd do this day.")
        break;
    case "Wednesday":
        console.log("Placement text for what I'd do this day.")
        break;
    case "Thursday":
        console.log("Placement text for what I'd do this day.")
        break;
    case "Friday":
        console.log("Placement text for what I'd do this day.")
        break;
    case "Saturday":
        console.log("Placement text for what I'd do this day.")
        break;
    case "Sunday":
        console.log("Placement text for what I'd do this day.")
        break;
    default:
        console.log("This isn't a day of the week")
        break;
}

