//=== Object.js ===//

//task1.Is it possible to create functions A and B so that new A() == new B()? Answer: yes
let obj = {};
function A() { return obj; }
function B() { return obj; }
alert( new A() == new B() ); // true

//task2.Create new Calculator
function Calculator() {
    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
    this.sum = function() {
      return this.a + this.b;
    };
    this.mul = function() {
      return this.a * this.b;
    };
  }
  let calculator = new Calculator();
  calculator.read();
  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );

//task3.Create new Accumulator
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
      this.value += +prompt('How much to add?', 0);
    };
  }
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);






//=== Task1.js ===//
let user = {};

user["name"] = "John";
user["surname"] = "Smith";
user["name"] = "Pete"
delete user["name"];



//=== Task2.js ===//
let schedule = {};

function isEmpty(schedule) {
    for(let key in schedule){
        return false;
    }
    return true;
}

alert(isEmpty(schedule));

schedule["8:30"] = "go to school";

alert(isEmpty(schedule));


//=== Task3 ===//
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}

alert(sum);


//=== Task4 ===//
function multiplyNumeric(menu) {
    for(let key in menu){
        if(typeof menu[key] == 'number') menu[key] *= 2;
    }
}


//=== this ===//
function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // What's the result?

//error, this doesnt work like that
//it should be more like this:
function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
    let user = makeUser();

    alert(user.ref().name);
}


let calculator = {
    read() {
        let a = +prompt("a?", '');
        let b = +prompt("b?", '');
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
  };
