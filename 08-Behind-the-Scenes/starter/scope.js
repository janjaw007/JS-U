'use strict';

// Scope Pracitce

// Global Excution Context
// create Global Variable Enviroment

// GB VE contain firstName,calcAge;
// create Global Scope

// Global Scope contain firstName,calcAge

// function calcAge Excution context
// cretae Variable Enviromaent

// calcAge's VE contain age,birthYear;
// create Scope

// calcAge scope contain age,birthYear;

// ScopeChain
// calcAge can look up for firstName,calcAge
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  // printAge Excution Context when calls
  // printAge EC create printAge VE
  // printAge VE contain output
  // print

  // printAge EC create Scope
  // printAge Scope contain output,(var because closet parent from if Block {})

  // printAge Scope Chain can look up
  // age,birthYear from calcAge

  // firstName,calcAge from GB
  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);
    console.log(firstName);

    // block scope create VE
    // if() VE contain str,firstName , add function

    // Scope Chain
    // if() VE can look up
    // output,millenial from printAge
    // age , birthYear from calcAge
    // firstName, calcAge from Global

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // create completely new variable but same name nothing to do with GB firstName
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      // add Create EC
      // add's EC Create add Scope
      // add's Scope contain a,b

      // add Scope Chain can look up  up to global
      function add(a, b) {
        return a + b;
      }

      const output = 'NEW OUPUT!';
    }
    console.log(millenial);
    // re-define from inner scope recived from chain
    console.log(output);
    // console.log(add(2,3))
  }
  printAge();

  return age;
}

// firstName Delacre before calcAge need to use
// so NO ERROR
const firstName = 'Jonas';

calcAge(1991);
