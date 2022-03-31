'use strict';

let result = [];

function solveEquation(a, b, c) {
  let disc = b**2 - 4*a*c;
  if (disc < 0) {
    result = [];
  } else if (disc === 0) {
    result = [-b/(2*a)];
  } else {
    result = [(-b + Math.sqrt(disc) )/(2*a), (-b - Math.sqrt(disc) )/(2*a)]
  }
  return result;
}

let a=Number(prompt('Введите a: '));
let b=Number(prompt('Введите b: ')); 
let c=Number(prompt('Введите c: ')); 

let res = solveEquation(a, b, c);
console.log (res);