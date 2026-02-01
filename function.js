const variables = document.querySelectorAll('button');
let currentNumber = "";
let previousNumber = "";
let operator = null;
let result = "";

variables.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
    if (!isNaN(value)) {
        if (currentNumber.length >= 7) return;
        currentNumber += value;
        updateDisplay(currentNumber);
        return;
         
} if (["+","-","*","/"].includes(value)) {
        previousNumber = currentNumber;
        operator = value;
        currentNumber = "";
        updateMiniDisplay(previousNumber);
        return;

    } if (value === "=") {
        result = calculate(previousNumber, operator, currentNumber);   
        updateDisplay(result); 
        updateMiniDisplay(result);
        return; 
        
    } if (value === "⌫") {
        currentNumber = currentNumber.slice(0, -1)
        updateDisplay(currentNumber);
        return;
    }    
});
});
    
function calculate(previousNumber, operator , currentNumber) {
            previousNumber = Number(previousNumber)
            currentNumber = Number(currentNumber)

            switch(operator) {
                case "+": return previousNumber + currentNumber;
                case "-": return previousNumber - currentNumber;
                case "*": return previousNumber * currentNumber;
                case "/": return previousNumber / currentNumber; 
                
            }
        }
        function updateDisplay(value) {              
            document.querySelector("#display").textContent = value; 
        }
        function updateMiniDisplay() {
            document.querySelector("#displayMini").textContent = previousNumber + operator + currentNumber;
        }