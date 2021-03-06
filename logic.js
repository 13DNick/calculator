
//declare global variables, select display, populate initial 0 in display
let displayNum = "0";
const display = document.querySelector("#display");
display.textContent = displayNum;

let firstNum = 0;
let secondNum = 0;
let operator = "";

//post results
function equalFunction(){
    secondNum = Number(displayNum);
    let result = operate(firstNum, operator, secondNum);
    
    if(result.toString.length <= 9){
        displayNum = result;
        display.textContent = displayNum;    
    } else{
        display.textContent = "ERROR - Answer too large!"
    }

}


//called by buttons and refresh global variables
function addFunction(){
    operator = "add";
    firstNum = Number(displayNum);
    displayNum = "0";
    display.textContent = displayNum;
}

function subtractFunction(){
    operator = "subtract";
    firstNum = Number(displayNum);
    displayNum = "0";
    display.textContent = displayNum;
}

function multiplyFunction(){
    operator = "multiply";
    firstNum = Number(displayNum);
    displayNum = "0";
    display.textContent = displayNum;
}

function divideFunction(){
    operator = "divide";
    firstNum = Number(displayNum);
    displayNum = "0";
    display.textContent = displayNum;
}


//check length of number in display
function checkLength(){
    if(displayNum.length < 9){
        return true;
    }
    return false;
}


//populate display
function enterNumber(button){
    if(checkLength()){
        if(displayNum == "0"){
            displayNum = "";
        }
        displayNum += button;
        display.textContent = displayNum;
    }
}

function enterZero(zero){
    if(checkLength()){
        displayNum += zero;
        display.textContent = displayNum;
    }
}

function enterDecimal(decimal){
    if(checkLength()){
        if(displayNum.indexOf(".") == -1){
            displayNum += decimal;
            display.textContent = displayNum;
        }
    }
}

function delFunction(){
    if(!(displayNum == "0") && !(displayNum == "")){
        displayNum = displayNum.slice(0, displayNum.length - 1);
        if(displayNum == ""){
            displayNum = "0";
        }
        display.textContent = displayNum;
    } else{
        displayNum = "0";
        display.textConent = displayNum;
    }
}


//full reset
function clearFunction(){
    displayNum = "0";
    display.textContent = displayNum;
}


//doing the math 
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if (b == 0){
        return "CANNOT DIVIDE BY ZERO";
    }

    return a / b;
}


//bring the math together and round result
function operate(a,operand,b){
    if(operand == "add"){
        const result = add(a,b).toFixed(2);
        return toFixed(result, 2);
    } else if(operand == "subtract"){
        const result = subtract(a,b).toFixed(2);
        return toFixed(result, 2);
    } else if(operand == "multiply"){
        const result = multiply(a,b).toFixed(2);
        return toFixed(result, 2);
    } else if(operand == "divide"){
        const result = divide(a,b).toFixed(2);
        return toFixed(result, 2);
    }
}


//function for rounding to 2 decimals 
function toFixed(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}


//TODO
// 1. add keyboard support
// 2. when dividing by 0 show error
// 3. populate display with history
// 4. make it look nicer