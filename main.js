let a;
let b;
let operator;
let num='';
const operand=[0];

let screen = document.querySelector('.screen');
screen.textContent = 0;

let clearButton=document.querySelector('.clear');
clearButton.addEventListener('click',allClear)
function allClear(){
    while(operand.length!==0){
        operand.pop();
    }
    num='';
    screen.textContent=0;
}
let numberButton = document.querySelectorAll('.number');
for(let i=0;i<numberButton.length;i++){
    numberButton[i].addEventListener('click',()=>{
        num+=numberButton[i].textContent;
        screen.textContent=num;
    })
}
let commaButton = document.querySelector('.comma');
commaButton.addEventListener('click',()=>{
    if(num.includes('.')===false){
        num+='.';
        screen.textContent=num;
    }
})

let buttonAdd = document.querySelector('.add');
buttonAdd.addEventListener('click',addButton);
function addButton(){
    if(operator==='subtract'){
        subtractButton();
    }
    else if(operator==='multiply'){
        multiplyButton();
    }
    else if(operator==='divide'){
        divideButton();
    }
    else{
        if(Number(num)!==0){
            operand.push(Number(num));
        }
        num='';
        screen.textContent=num;
        let total=operand[0]
        for(let i=1;i<operand.length;i++){
            total+=operand[i];
        };
        while(operand.length>0){
            operand.pop();
        };
        operand.push(total);
        screen.textContent=operand[0];
    }
    operator='add';
}

let buttonSubtract = document.querySelector('.subtract');
buttonSubtract.addEventListener('click',subtractButton)
function subtractButton(){
    if(operator==='add'){
        addButton();
    }
    else if(operator==='multiply'){
        multiplyButton();
    }
    else if(operator==='divide'){
        divideButton();
    }
    else{
        operator=undefined;
        if(Number(num)!==0){
            operand.push(Number(num));
        }
        num='';
        screen.textContent=num;
        let total=operand[0];
        for(let i=1;i<operand.length;i++){
            total-=operand[i];
        };
        while(operand.length>0){
            operand.pop();
        };
        operand.push(total);
        screen.textContent=operand[0];
    }
    operator='subtract';
}

let buttonMultiply = document.querySelector('.multiply');
buttonMultiply.addEventListener('click',multiplyButton);
function multiplyButton(){
    if(operator==='add'){
        addButton();
    }
    else if(operator==='subtract'){
        subtractButton();
    }
    else if(operator==='divide'){
        divideButton();
    }
    else{
        operator=undefined;
        if(Number(num)!==0){
            operand.push(Number(num));
        }
        num='';
        screen.textContent=num;
        if(operand[0]===0){
            operand[0]=1;
        }
        let total=operand[0];
        for(let i=1;i<operand.length;i++){
            total*=operand[i];
        };
        while(operand.length>0){
            operand.pop();
        };
        operand.push(total);
        screen.textContent=operand[0];
    }
    operator='multiply';
}
let buttonDivide = document.querySelector('.divide');
buttonDivide.addEventListener('click',divideButton);
function divideButton(){
    if(operator==='add'){
        addButton();
    }
    else if(operator==='subtract'){
        subtractButton();
    }
    else if(operator==='multiply'){
        multiplyButton();
    }
    else{
        operator=undefined;
        if(Number(num)!==0){
            operand.push(Number(num));
        }
        num='';
        screen.textContent=num;
        if(operand[0]===0){
            operand[0]=1;
        }
        let total=operand[0];
        for(let i=1;i<operand.length;i++){
            total/=operand[i];
        };
        while(operand.length>0){
            operand.pop();
        };
        operand.push(total);
        screen.textContent=operand[0];
    }
    operator='divide';
}
let buttonResult = document.querySelector('.result');
buttonResult.addEventListener('click',()=>{
    if(operator==='add'){
        addButton();
    }
    else if(operator==='subtract'){
        subtractButton();
    }
    else if(operator==='multiply'){
        multiplyButton();
    }
    else if(operator==='divide'){
        divideButton();
    }
})
