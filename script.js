const frsNumber = +prompt("Please, enter one number", "");
const scdNumber = +prompt("Please, enter second number", "");

function sum(a, b) {
   const mathOper = a + b;
   return mathOper;
}

function diff(a, b) {
   const mathOper = a - b;
   return mathOper;
}

function mult(a, b) {
   const mathOper = a * b;
   return mathOper;
}

function div(a, b) {
   const mathOper = a / b;
   return mathOper;
}

const sumResult = sum(frsNumber, scdNumber);
const diffResult = diff(frsNumber, scdNumber);
const multResult = mult(frsNumber, scdNumber);
const divResult = div(frsNumber, scdNumber);

const calcOper = `Calculations are finished!
Sum: ${frsNumber} + ${scdNumber} = ${sumResult}
Diff: ${frsNumber} - ${scdNumber} = ${diffResult}
Mult: ${frsNumber} * ${scdNumber} = ${multResult}
Div: ${frsNumber} / ${scdNumber} = ${divResult}
`;

alert(calcOper)
console.log(calcOper)