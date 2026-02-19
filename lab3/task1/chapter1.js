<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JavaScript Tasks</title>
</head>
<body>

<script>
'use strict';

/* ==============================
   1. I’m JavaScript
============================== */
alert("I’m JavaScript!");

/* ==============================
   2. Working with variables
============================== */
let admin;
let name;

name = "John";
admin = name;

alert(admin); // John

/* ==============================
   3. Correct variable naming
============================== */
let planetName = "Earth";
let currentUserName = "John";

/* ==============================
   4. Uppercase constants
============================== */
const BIRTHDAY = '18.04.1982';
function someCode(date) {
  return 2026 - 1982; // пример вычисления возраста
}
const age = someCode(BIRTHDAY);

/* ==============================
   5. Template strings output
============================== */
let user = "Ilya";

alert(`hello ${1}`);       // hello 1
alert(`hello ${"name"}`);  // hello name
alert(`hello ${user}`);    // hello Ilya

/* ==============================
   6. Ask user name
============================== */
let userName = prompt("What is your name?");
alert("Your name is: " + userName);

/* ==============================
   7. Prefix vs Postfix
============================== */
let a = 1, b = 1;

let c = ++a;
let d = b++;

console.log("a =", a); // 2
console.log("b =", b); // 2
console.log("c =", c); // 2
console.log("d =", d); // 1

/* ==============================
   8. Assignment result
============================== */
let a2 = 2;
let x = 1 + (a2 *= 2);

console.log("a2 =", a2); // 4
console.log("x =", x);   // 5

/* ==============================
   9. Type conversions
============================== */
console.log("" + 1 + 0);      
console.log("" - 1 + 0);      
console.log(true + false);    
console.log(6 / "3");         
console.log("2" * "3");       
console.log(4 + 5 + "px");    
console.log("$" + 4 + 5);     
console.log("4" - 2);         
console.log("4px" - 2);       
console.log("  -9  " + 5);    
console.log("  -9  " - 5);    
console.log(null + 1);        
console.log(undefined + 1);   
console.log(" \t \n" - 2);    

/* ==============================
   10. Fix the addition
============================== */
let num1 = prompt("First number?", 1);
let num2 = prompt("Second number?", 2);
alert(Number(num1) + Number(num2));

/* ==============================
   11. if ("0")
============================== */
if ("0") {
  alert("Hello");
}

/* ==============================
   12. Official name of JS
============================== */
let answer = prompt('What is the “official” name of JavaScript?');

if (answer === "ECMAScript") {
  alert("Right!");
} else {
  alert("You don’t know? ECMAScript!");
}

/* ==============================
   13. Show the sign
============================== */
let number = +prompt("Enter a number");

if (number > 0) alert(1);
else if (number < 0) alert(-1);
else alert(0);

/* ==============================
   14. Rewrite if → ?
============================== */
let a3 = 1;
let b3 = 2;

let result = (a3 + b3 < 4) ? 'Below' : 'Over';
alert(result);

/* ==============================
   15. Login message
============================== */
let login = prompt("Enter login");

let message =
  (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

alert(message);

/* ==============================
   16. Last loop value
============================== */
let i1 = 3;
while (i1) {
  alert(i1--);
}

/* ==============================
   17. Prefix vs Postfix in while
============================== */
let i2 = 0;
while (++i2 < 5) alert(i2);

let i3 = 0;
while (i3++ < 5) alert(i3);

/* ==============================
   18. for loop
============================== */
for (let i = 0; i < 5; i++) {
  alert(i);
}

/* ==============================
   19. Even numbers 2–10
============================== */
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) alert(i);
}

/* ==============================
   20. Replace for with while
============================== */
let j = 0;
while (j < 3) {
  alert(`number ${j}!`);
  j++;
}

/* ==============================
   21. Repeat until > 100
============================== */
let num;
do {
  num = prompt("Enter number greater than 100");
} while (num <= 100 && num !== null && num !== "");

/* ==============================
   22. Prime numbers
============================== */
let n = 10;

for (let numP = 2; numP <= n; numP++) {
  let isPrime = true;

  for (let div = 2; div < numP; div++) {
    if (numP % div === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) alert(numP);
}

/* ==============================
   23. switch → if
============================== */
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

/* ==============================
   24. if → switch
============================== */
let a4 = +prompt('a?', '');

switch (a4) {
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

</script>

</body>
</html>
