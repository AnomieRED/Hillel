const frsNumber = +prompt("Please, enter one number", "");
const scdNumber = +prompt("Please, enter second number", "");

function sum(a, b) {
   const mathCalc = a + b;
   return mathCalc;
};

function diff(a, b) {
   const mathCalc = a - b;
   return mathCalc;
};

function mult(a, b) {
   const mathCalc = a * b;
   return mathCalc;
};

function div(a, b) {
   const mathCalc = a / b;
   return mathCalc;
};

function mathOperation(a, b, operation) {
   return operation(a, b);
};

const mathCalc = `Calculations are finished!
Sum: ${frsNumber} + ${scdNumber} = ${mathOperation(frsNumber, scdNumber, sum)}
Diff: ${frsNumber} - ${scdNumber} = ${mathOperation(frsNumber, scdNumber, diff)}
Mult: ${frsNumber} * ${scdNumber} = ${mathOperation(frsNumber, scdNumber, mult)}
Div: ${frsNumber} / ${scdNumber} = ${mathOperation(frsNumber, scdNumber, div)}
`;

//Console
console.log(mathCalc);

//Alert
alert(mathCalc);

