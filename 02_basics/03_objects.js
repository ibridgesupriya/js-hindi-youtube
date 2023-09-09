// singleton 

// object.create
// object literals
const jsUser = {
    name: "supriya",
    "full name": "Supriya",
    age: "22",
    location: "hyderabad",
    email: "supriyachulika96@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser[email])
// console.log(jsUser["full name"]) 
// console.log(jsUser.mySym)

jsUser.email = "supriyachiluka96@.com"
Object.freeze(jsUser)
jsUser.email = "supriyachiluka96@.com"
console.log(jsUser); 


jsUser.greeting = function(){
    console.log("Hello js user")
}

jsUser.greetingTwo = function(){
    console.log(`Helllo js user, ${This.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());














