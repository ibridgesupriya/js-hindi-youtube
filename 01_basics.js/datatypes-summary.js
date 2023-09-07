// promitive

// 7 types : string, number, boolean, null, undefined, symbol, biginit

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTem = null
let userEmail;

const id = ('')
const anotherId = ('123')

console.log(id === anotherId);
const bigNumber = 233677788990654322n



// reference (Non Primitive)

//Array , objects, functions

const heros = ["shakitman", "nagraj", "doga"];
let myObj =  {
    name: "supriya",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");

}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// stack (Primitive), heap (Non-primitive)

let myofficename = "iBridge Digital"

let anothername = "techsoft"
anothername = "supriya"

console.log();
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "supriya@12.com"

console.log(userOne.email);
console.log(userTwo.email);


