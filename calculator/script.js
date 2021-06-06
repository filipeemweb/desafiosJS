const display = document.querySelector('div#display');
display.innerHTML = "";

document.querySelectorAll('div.btn').forEach((btn, i) => {
    btn.setAttribute('onclick', 'press(this)');
});

let sign;
let num1 = 0;
let num2 = 0;
let total;

function press(e) {
    let value = e.innerText;

    displayOnScreen(value);
}

function displayOnScreen(value) {
    if (value >= 0 && value < 10) {
        display.innerText += value;
    } else if (value === "<<") {
        let temp = display.innerText.substr(0, display.innerText.length - 1);
        display.innerText = temp;
    } else if (value === 'C') {
        clearAll();
    } else if (value === '.') {
        display.innerText += value;
    } else if (value === '%') {
        percentage(); 
        display.innerText = total;       
    } else if (value === '=') {
        calculate();
        display.innerText = total;
    } else {
        if (!sign) {
            display.innerText += value;
            sign = value;
        }
    }
}

function clearAll() {
    display.innerHTML = "";
    num1 = "";
    num2 = "";
    total = "";
    sign = "";
}

function calculate() {
    let displayContend = display.innerText;
    
    if (!sign) {
        alert('[ERRO] Please, enter a operation!')
        clearAll();
    }
    
    let parts = displayContend.split(sign);
    num1 = Number(parts[0]);
    num2 = Number(parts[1]);

    if (num2 === null || num2 === NaN) {
        alert('[ERRO] Please, enter a operation!')
        clearAll();
        return;
    } 

    switch (sign) {
        case "+": 
            total = num1 + num2;
            break;
        case "-":
            total = num1 - num2;
            break;
        case "*":
            total = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert('[ERRO] Please, enter a operation!')
                clearAll();
                return;
            }  
            total = num1 / num2;
            break;
        default:
            alert("[ERRO] Something went wong!");
            clearAll();
            break;
    }
    
    num1 = total;
    num2 = 0;
    sign = "";
}

function percentage() {
    let displayContend = display.innerText;
    let temp, result;
    
    if (!sign) {
        alert('[ERRO] Please, enter a operation!')
        clearAll();
        return;
    } 
    
    let parts = displayContend.split(sign);
    num1 = Number(parts[0]);
    num2 = Number(parts[1]);

    if (num2 === null) {
        alert('[ERRO] Please, enter a operation!')
        clearAll();
        return;
    } 
    
    function percentageTotal (a, b) {
        let result = a * (b / 100);
        return result;
    }

    switch (sign) {
        case "*":
            total = percentageTotal(num1, num2);
            break;
        case "+": 
            total = num1 + percentageTotal(num1, num2);
            break;
        case "-":
            total = num1 - percentageTotal(num1, num2);
            break;
        case "/":
            if (num2 === 0) {
                alert('[ERRO] Please, enter a operation!')
                clearAll();
                return;
            }   
            total = num1 / (num2 / 100);
            break;
        default:
            alert("[ERRO] Something went wong!");
            clearAll();
            break;
    } 

    num1 = total;
    num2 = 0;
    sign = "";
}