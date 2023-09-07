const name = "supriya"
const repoCount = 50
// console.log(name + repoCount + "value");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameNmae = new String(`supriya-ch`)

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.charAt('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameNmae.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   supriya   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitech.com/hitesh%20choudary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));