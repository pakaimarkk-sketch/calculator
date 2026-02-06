const variables = document.querySelectorAll('button');
let currentNumber = "";
let previousNumber = "";
let operator = null;
let result = "";
let justCalculated = false;
let history = []
let miniDisplay = []

variables.forEach(button => {
    button.addEventListener("click", () => {
    const value = button.textContent;
        if (!isNaN(value)) {    
            if (justCalculated) {
                result = "";
                previousNumber = "";
                currentNumber = value;
                justCalculated = false;
                updateDisplay(currentNumber);
                updateMiniDisplay(currentNumber)
                return;
        }

    if (currentNumber.length >= 9) return;

    currentNumber += value;
    updateDisplay(currentNumber);
    return;
         
} if (["+","-","*","/"].includes(value)) {
        if (justCalculated) {
            previousNumber = result
            
        } else {
            previousNumber = currentNumber;
        }
        operator = value;
        currentNumber = "";
        justCalculated = false;
        
        
        return;

    } if (value === "=") {
        result = calculate(previousNumber, operator, currentNumber);
        previousNumber = result;
        currentNumber = "";   
        updateDisplay(result); 
        updateMiniDisplay();
        updateHistory(result)
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

    function updateHistory(value) {
            const history = document.querySelector("#memoryCalc");
            history.textContent += value + "\n";
        }
        function updateDisplay(value) {              
            document.querySelector("#display").textContent = value; 
        }
        function updateMiniDisplay() {
            const miniDisplay = document.querySelector("#displayMini");
            miniDisplay.textContent = `${result}${operator}${currentNumber}`;
        }