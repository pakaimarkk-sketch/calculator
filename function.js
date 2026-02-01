
const variables = document.querySelectorAll('button');
let currentNumber = "";
let previousNumber = "";
let operator = null;

variables.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
    if (!isNaN(value)) {
        currentNumber += value;
        updateDisplay(currentNumber);
        return;

    } if (["+","-","*","/"].includes(value)) {
        previousNumber = currentNumber;
        operator = value;
        currentNumber = "";
        console.log(previousNumber)

    } if (value === "⌫") {
        currentNumber = currentNumber.slice(0, -1)
        updateDisplay(currentNumber);
        return;
    }
     function updateDisplay(value) {
            document.querySelector("#display").textContent = value;
     }
})})