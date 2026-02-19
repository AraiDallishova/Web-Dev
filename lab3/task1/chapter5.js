<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JavaScript Data Types Tasks</title>
</head>
<body>

<script>
'use strict';

/* =====================================================
   1. Data types
===================================================== */
let str = "Hello";
str.test = 5;

// В strict mode будет ошибка, без strict → undefined
console.log(str.test);


/* =====================================================
   2. Numbers
===================================================== */

// Sum numbers from visitor
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");
alert(a + b);

// Why 6.35.toFixed(1) == 6.3?
alert((6.35 * 10).toFixed(20));

// Repeat until input is a number
function readNumber() {
  let num;
  do {
    num = prompt("Enter a number please?", 0);
  } while (!isFinite(num));

  if (num === null || num === '') return null;
  return +num;
}
alert(`Read: ${readNumber()}`);

// Infinite loop example
let i = 0;
// while (i != 10) i += 0.2; // никогда не станет ровно 10

// Random number
function random(min, max) {
  return min + Math.random() * (max - min);
}

// Random integer
function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}


/* =====================================================
   3. Strings
===================================================== */

// Capitalize first letter
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

// Spam check
function checkSpam(str) {
  let lower = str.toLowerCase();
  return lower.includes("viagra") || lower.includes("xxx");
}

// Truncate
function truncate(str, maxlength) {
  return str.length > maxlength
    ? str.slice(0, maxlength - 1) + "…"
    : str;
}

// Extract currency
function extractCurrencyValue(str) {
  return +str.slice(1);
}


/* =====================================================
   4. Arrays
===================================================== */

// Array copy
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");

console.log(fruits.length); // 4

// Array operations
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
styles.shift();
styles.unshift("Rap", "Reggae");

// Sum input numbers
function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt("Number?", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }

  return numbers.reduce((sum, n) => sum + n, 0);
}

// Max subarray (Kadane)
function getMaxSubSum(arr) {
  let max = 0;
  let partial = 0;

  for (let item of arr) {
    partial = Math.max(item, partial + item);
    max = Math.max(max, partial);
  }

  return max;
}


/* =====================================================
   5. Array methods
===================================================== */

// camelize
function camelize(str) {
  return str
    .split("-")
    .map((w, i) => i === 0 ? w : w[0].toUpperCase() + w.slice(1))
    .join("");
}

// filterRange
function filterRange(arr, a, b) {
  return arr.filter(x => x >= a && x <= b);
}

// filterRangeInPlace
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// copySorted
function copySorted(arr) {
  return arr.slice().sort();
}


/* =====================================================
   6. Objects & arrays of objects
===================================================== */

let users = [
  {name: "John", age: 25},
  {name: "Pete", age: 30},
  {name: "Mary", age: 28}
];

// names array
let names = users.map(u => u.name);

// sort by age
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

// average age
function getAverageAge(users) {
  return users.reduce((s, u) => s + u.age, 0) / users.length;
}

// unique strings
function unique(arr) {
  return Array.from(new Set(arr));
}


/* =====================================================
   7. Map / Set
===================================================== */

// Anagrams filter
function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return Array.from(map.values());
}


/* =====================================================
   8. WeakMap / WeakSet
===================================================== */

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"}
];

let readMessages = new WeakSet();
readMessages.add(messages[0]);


/* =====================================================
   9. Object methods
===================================================== */

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0);
}

function count(obj) {
  return Object.keys(obj).length;
}


/* =====================================================
   10. Dates
===================================================== */

function getWeekDay(date) {
  return ["SU","MO","TU","WE","TH","FR","SA"][date.getDay()];
}

function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getSecondsToday() {
  let now = new Date();
  let start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.floor((now - start) / 1000);
}

function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return Math.floor((tomorrow - now) / 1000);
}


/* =====================================================
   11. Destructuring
===================================================== */

let user = { name: "John", years: 30 };
let {name, years: age, isAdmin = false} = user;


/* =====================================================
   12. JSON
===================================================== */

let user2 = JSON.parse(JSON.stringify(user));

let room = { number: 23 };

let meetup = {
  title: "Conference",
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

JSON.stringify(meetup, (key, value) =>
  key !== "" && value === meetup ? undefined : value
);

</script>

</body>
</html>
