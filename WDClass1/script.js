
console.log("Hi!"); //to the browser's console for debugging
 

const header = document.querySelector("h1");
header.textContent = "Dynamic content!";

let aNumber = 0;//number
let anotherNumber = 1;
aNumber = anotherNumber +2;

const aConstantNumber = 3;

let str = "abc";
let condition = true;// boolean

let nullValue = null;// a value that is intentionally "nothing"
let something;//has no value so it is undefined
console.log(something);

const result1 = aNumber + anotherNumber;

const aValue = window.prompt("Give me a value");

const isAnEvenNumber = numericValue % 2;// an even number / 2 has a remainder of 

if(isAnEvenNumber == 0){
    window.alert("That was an even number");

}else{
    window.alert("You gave me an odd number");
}
