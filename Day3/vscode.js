function ans() {
  const userInput = document.getElementById("numbersInput").value;

  // Convert the input into an array of numbers
  const numbers = userInput.split(" ").map(Number);

  // Calculate the sum of the numbers
  let total = numbers.reduce((sum, num) => sum + num, 0);
  document.getElementById("output").innerHTML = `Initial sum: ${total}`;

  // Function to multiply the digits of a number
  function multiplyDigits(num) {
    let product = 1;
    while (num > 0) {
      product *= num % 10; // Multiply by the last digit
      num = Math.floor(num / 10); // Remove the last digit
    }
    return product;
  }

  // Repeatedly multiply digits until the product is a single digit
  let intermediateResults = `Initial sum: ${total}<br>`;
  while (total >= 10) {
    total = multiplyDigits(total);
    intermediateResults += `Intermediate result: ${total}<br>`;
  }

  // Display the results
  intermediateResults += `Final single-digit result: ${total}`;
  document.getElementById("output").innerHTML = intermediateResults;
}
