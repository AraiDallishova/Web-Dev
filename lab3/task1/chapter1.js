//======= Task1 ========
//Create a page that shows a message “I’m JavaScript!”.
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>I'm JavaScript</title>
</head>
<body>

<script>
  alert("I’m JavaScript!");
</script>

</body>
</html>



//Working with variables
'use strict';

let admin;
let name;

name = "John";
admin = name;

alert(admin); // John


//Giving the right name
let planetName = "Earth";
let planet = "Earth";
let currentUserName = "John";


//Uppercase const?
const birthday = '18.04.1982';
const age = someCode(birthday);
//birthday можно писать в верхнем регистре:
const BIRTHDAY = '18.04.1982';



//What is the output of the script?
let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya



//Create a web-page that asks for a name and outputs it.
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Ask Name</title>
</head>
<body>

<script>
  'use strict';

  let userName = prompt("What is your name?");
  alert("Your name is: " + userName);

</script>

</body>
</html>



//POSTFIX AND PREFIX FORMS
let a = 1, b = 1;

let c = ++a; // prefix
let d = b++; // postfix

console.log("Postfix/Prefix:");
console.log("a =", a); // 2
console.log("b =", b); // 2
console.log("c =", c); // 2
console.log("d =", d); // 1


//ASSIGNMENT RESULT
let a2 = 2;

let x = 1 + (a2 *= 2);

console.log("Assignment result:");
console.log("a2 =", a2); // 4
console.log("x =", x);   // 5


//TYPE CONVERSIONS
console.log("Type conversions:");

console.log("" + 1 + 0);      // "10"
console.log("" - 1 + 0);      // -1
console.log(true + false);    // 1
console.log(6 / "3");         // 2
console.log("2" * "3");       // 6
console.log(4 + 5 + "px");    // "9px"
console.log("$" + 4 + 5);     // "$45"
console.log("4" - 2);         // 2
console.log("4px" - 2);       // NaN
console.log("  -9  " + 5);    // "  -9  5"
console.log("  -9  " - 5);    // -14
console.log(null + 1);        // 1
console.log(undefined + 1);   // NaN
console.log(" \t \n" - 2);    // -2




//FIX THE ADDITION
let num1 = prompt("First number?", 1);
let num2 = prompt("Second number?", 2);
alert(Number(num1) + Number(num2));




/*
==============================
 if (a string with zero)
==============================
*/

if ("0") {
  alert("Hello"); // YES, will be shown
}



/*
==============================
The name of JavaScript
==============================
*/

let answer = prompt('What is the “official” name of JavaScript?');

if (answer === "ECMAScript") {
  alert("Right!");
} else {
  alert("You don’t know? ECMAScript!");
}



/*
==============================
Show the sign
==============================
*/

let number = +prompt("Enter a number");

if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}



/*
==============================
Rewrite 'if' into '?'
==============================
*/

let a = 1;
let b = 2;

let result = (a + b < 4) ? 'Below' : 'Over';

alert(result);



/*
==============================
Rewrite 'if..else' into '?'
==============================
*/

let login = prompt("Enter login");

let message =
  (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

alert(message);



'use strict';

/*
==============================
Last loop value
==============================
*/

let i1 = 3;

while (i1) {
  alert(i1--);
}
// Last value: 1



/*
==============================
while: prefix vs postfix
==============================
*/

// Prefix
let i2 = 0;
while (++i2 < 5) alert(i2);
// 1,2,3,4

// Postfix
let i3 = 0;
while (i3++ < 5) alert(i3);
// 1,2,3,4,5



/*
==============================
for: prefix vs postfix
==============================
*/

// Postfix
for (let i = 0; i < 5; i++) {
  alert(i);
}
// 0,1,2,3,4

// Prefix
for (let i = 0; i < 5; ++i) {
  alert(i);
}
// 0,1,2,3,4

// Both show same values



/*
==============================
Output even numbers (2–10)
==============================
*/

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    alert(i);
  }
}



/*
==============================
Replace for with while
==============================
*/

let j = 0;

while (j < 3) {
  alert(`number ${j}!`);
  j++;
}



/*
==============================
Repeat until input > 100
==============================
*/

let num;

do {
  num = prompt("Enter number greater than 100");
} while (num <= 100 && num !== null && num !== "");




/*
==============================
Output prime numbers
==============================
*/

let n = 10;

for (let num = 2; num <= n; num++) {

  let isPrime = true;

  for (let div = 2; div < num; div++) {
    if (num % div === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    alert(num);
  }
}


/*
==============================
 Rewrite "switch" into "if"
==============================
*/

let browser = prompt("Enter browser");

if (browser === 'Edge') {
  alert("You've got the Edge!");
} else if (
  browser === 'Chrome' ||
  browser === 'Firefox' ||
  browser === 'Safari' ||
  browser === 'Opera'
) {
  alert('Okay we support these browsers too');
} else {
  alert('We hope that this page looks ok!');
}



/*
==============================
Rewrite "if" into "switch"
==============================
*/

let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert('2,3');
    break;
}
