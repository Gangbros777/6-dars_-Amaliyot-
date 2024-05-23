const firstNumber = prompt("Write your first number");
const secondNumber = prompt("Write your second number");

const operation = prompt("Choose an operation:\n1. Plus\n2. Minus\n3. Increase\n4. Division");

let result;

switch (operation) {
  case "1":
    result = Number(firstNumber) + Number(secondNumber);
    break;
  case "2":
    result = Number(firstNumber) - Number(secondNumber);
    break;
  case "3":
    result = Number(firstNumber) * Number(secondNumber);
    break;
  case "4":
    result = Number(firstNumber) / Number(secondNumber);
    break;
  default:
    result = "Invalid operation";
}

alert(result);