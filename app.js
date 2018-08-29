//here is a comment
/*Multi line 
Zachary*/

console.log("hello javascript");

//value or data types
console.log("Hello from Javascript!");
console.log("Let's do some math");
console.log(4 + 7);
console.log(12 / 0);
console.log('Goodbye!');

//variables
let a = 3.14;
console.log(a);
const temp1 = 36.9;
const temp2 = 37.6;
const temp3 = 37.1;
console.log(temp1, temp2, temp3);
//temp3 = 9;//error

//increment a number variable
let c = 0; // c contains 0
c += 1; // c contains 1
c++; //c contains 2
console.log(c); // shows 2

//variable scope
let num1 = 0;
{
    num1 = 1; // ok : num1 is declared in the parent block
    const num2 = 0;
    console.log(num1);
}
//console.log(num2); // ok: num2 is declared in the current block above cannot see

//template literal
const country = "france";
console.log(`I live in ${country}`); //shows "I live in France"
const x = 3;
const y = 7;
console.log(`${x} + ${y} + ${x + y}`); // shows "3 + 7 + 10"

//observe the following outputs
console.log(4 + 5);
console.log("4 + 5");
console.log("4" + "5");
console.log(4 + "5");
const g = "five" * 2;
console.log(g);

//explicit conversion Number() or String()
const h = "5";
console.log(h + 1); //Concatenation: show the string "51"
const i = Number(h);
console.log(i + 1); // numerical addition: show the number 6
const j = 6;
console.log("5" + String(j));
console.log(Number("dog"));  //error NaN

//strict equality using ===
let num = 0;
let str = '0';

console.log(num === num);   //true
console.log(str === str);   //true
console.log(num === str);  // false
console.log(num == str); // true

//switch
const p = "abc";
switch(p) {
    case "abc": 
     console.log("x = abc");
     break;
    case "def":
     console.log("x = def");
     break;
     default: console.log("x = otherwise");

}

//while loop 
let number1 = 1;
while( number1 <= 5) {
    console.log(number1);
    number1++;
}

//for loop
for(let i = 1; i <= 5; i++)
{
    console.log(i); // ok
}
//console.log(i); // error: the i variable is not visible here
