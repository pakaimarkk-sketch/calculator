const variables = document.querySelectorAll('button');
let currentNumber = "";
let previousNumber = "";
let operator = null;
let result = "";
let justCalculated = false;

variables.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
    if (!isNaN(value)) {
        if (currentNumber.length >= 7) return;
        if (justCalculated) return;
        currentNumber += value;
        updateDisplay(currentNumber);
        return;
         
} if (["+","-","*","/"].includes(value)) {
        if (justCalculated) {
            previousNumber = result;
        } else {
            previousNumber = currentNumber;
        }
        operator = value;
        currentNumber = "";
        updateMiniDisplay(previousNumber);
        justCalculated = false;
        return;

    } if (value === "=") {
        result = calculate(previousNumber, operator, currentNumber);
        previousNumber = result;
        currentNumber = "";   
        updateDisplay(result); 
        updateMiniDisplay(result);
        updateCalcHistory();
        justCalculated = true;
        return;

    } if (value === "⌫") {
        if (justCalculated || currentNumber === "") return;
        currentNumber = currentNumber.slice(0, -1) 
        updateDisplay(currentNumber);
        return;
    }        
})});

function calculate(previousNumber, operator , currentNumber) {
            previousNumber = Number(previousNumber);
            currentNumber = Number(currentNumber);

            switch(operator) {
                case "+": result = previousNumber + currentNumber; break;
                case "-": result = previousNumber - currentNumber; break;
                case "*": result = previousNumber * currentNumber; break;
                case "/": result = previousNumber / currentNumber; break;  
            }
            return result;
        }
        function updateDisplay(value) {              
            document.querySelector("#display").textContent = value; 
        }
        function updateMiniDisplay() {
            document.querySelector("#displayMini").textContent = "figuring it out";
        }
        function updateCalcHistory() {
            document.querySelector("#memoryCalc").textContent = "figuring it out, yes";
        }