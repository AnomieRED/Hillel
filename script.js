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
Sum: ${frsNumber} + ${scdNumber} = ${sum(frsNumber, scdNumber)}
Diff: ${frsNumber} - ${scdNumber} = ${diff(frsNumber, scdNumber)}
Mult: ${frsNumber} * ${scdNumber} = ${mult(frsNumber, scdNumber)}
Div: ${frsNumber} / ${scdNumber} = ${div(frsNumber, scdNumber)}
`;

//Console
console.log(mathCalc);

//Alert
alert(mathCalc);