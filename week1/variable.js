var variable = "123";
var variable = "345";
console.log(`variable: ${variable}`);


let variable2 = "123";
let variable2 = "321";
console.log(`variable2: ${variable2}`); // SyntaxError: Identifier 'variable2' has already been declared

const variable3 = "123";
const variable3 = "321";
console.log(`variable3: ${variable3}`); // SyntaxError: Identifier 'variable2' has already been declared

 
function colorFunction(){
    if(true) {
        var color = 'blue';
        console.log(color); // blue
    }
    console.log(color); //blue 
}
colorFunction();
console.log(color); //ReferenceError: color is not defined