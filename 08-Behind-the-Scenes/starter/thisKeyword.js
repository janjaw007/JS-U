'use strict';
// This this keyworkd in Global  will point to window obj
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // IN REGULAR CALLED NOT obj.function()
  // This will BE UNDEFINDED
  // ONLY IN STRICT MODE
  // NORMAL MODE ALSO POINT to PARENT OBJ
  // WHICH IS WINDOW
  console.log(this);
};

// This is REGULAR FUNCTION CALLED
calcAge(1991);

// This ARROW
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // IN ARROW  THERE IS NO THIS
  // SO THIS IS USING PARENT FUCTION SCOPE
  // WHICH IN THIS IS GLOBAL
  console.log(this);
};

calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    // Jonas called fuction so
    // this is point to jonas obj
    console.log(this);
    console.log(2037 - this.year);
  },
};

// NOT REGULAR CALLED
jonas.calcAge();

// this point to obj who call not obj wrote method

const matilda = {
  year: 2017,
};

// borrow copy method from jonas obj
matilda.calcAge = jonas.calcAge;

// calcAge included
console.log(matilda);

matilda.calcAge();

// copy function to variable
// dont call fucntion
const f = jonas.calcAge;

console.log(f);

// regular function call this keyword is undefinded
// f();
