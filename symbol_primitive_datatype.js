//Symbol() function creation
const symbol = Symbol();
console.log(symbol);

//A global symbol can be created by passing in an object with a global property set to true. it can be accessed anywhere in the code.
const globalSymbol = Symbol('globalSymbol',{global:true});
console.log(globalSymbol);

//Constants are useful for creating APIs
const MY_CONSTANT = Symbol('MY_CONSTANT',{constant:true});
console.log(MY_CONSTANT);

//Object keys are useful when you want to assign a unique identifier to an object
const mySymbol = Symbol();
const myObject = {
  [mySymbol] : 'Hello',
  name:'jj',
  age:10
};
console.log(myObject[mySymbol]);
//private properties are not enumerable. Symbols are not included in iteration
console.log(Object.keys(myObject));

//Symbol can also be useful to create unique constants
const CONST_ONE = Symbol('CONST_ONE',{constant:true});
const CONST_TWO = Symbol('CONST_TWO',{constant:true});
console.log(CONST_ONE === CONST_TWO);
