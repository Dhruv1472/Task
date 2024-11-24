let currentNumber = "";
let previousNumber = "";
let operation = "";

function add(number) {
  currentNumber += number;
  document.getElementById("display").value = currentNumber;
}

function op(op) { 
  operation = op;
  previousNumber = currentNumber;
  currentNumber = "";
}

 
function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operation = "";
  document.getElementById("display").value = currentNumber;
}

function calculate() { 
  let result;
  const prev = Number(previousNumber);
  const curr = Number(currentNumber);

  switch (operation) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = prev / curr;
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  operation = "";
  previousNumber = "";
  document.getElementById("display").value = currentNumber;
}
