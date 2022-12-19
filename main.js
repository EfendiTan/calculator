let a;
let b;
let operator;
let num='';
const operand=[];

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
    operator=undefined;
}
let numberButton = document.querySelectorAll('.number');
for(let i=0;i<numberButton.length;i++){
    numberButton[i].addEventListener('click',()=>{
        num+=numberButton[i].textContent;
        screen.textContent=num;
    })
}
let commaButton = document.querySelector('.comma');
commaButton.addEventListener('click',comma)
function comma(){
    if(num.includes('.')===false){
        num+='.';
        screen.textContent=num;
    }
}
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
        operator=undefined;
        if(num==='.'){
            num=Number('0.'+num);
        }
        operand.push(Number(num));
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
        if(num==='.'){
            num=Number('0.'+num);
        }
        operand.push(Number(num));
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
        if(num!==''){
            if(num==='.'){
                num=Number('0.'+num);
            }
            if(Number(num)!==0){
                operand.push(Number(num));
                num='';
                screen.textContent=num;
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
            else if(Number(num)===0){
                operand.push(Number(num));
            }
        }
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
        if(num==='.'){
            num=Number('0.'+num);
        }
        if(num!==''){
            if(Number(num)!==0){
                operand.push(Number(num));
                num='';
                screen.textContent=num;
                let total=operand[0];
                for(let i=1;i<operand.length;i++){
                    total/=operand[i];
                };
                while(operand.length>0){
                    operand.pop();
                };
                let isDecimal=total.toString();
                if(isDecimal.includes('.')){
                    total=total.toFixed(2);
                }
                operand.push(total);
                screen.textContent=operand[0];
            }
            else{
                allClear();
                screen.textContent='ERROR';
                num='';
            }
        }
        
    }
    operator='divide';
}
let buttonResult = document.querySelector('.result');
buttonResult.addEventListener('click',result)
function result(){
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
    num=operand[0];
}
let buttonPlusMinus = document.querySelector('.plusMinusSign');
buttonPlusMinus.addEventListener('click',plusMinusButton);
function plusMinusButton(){
    result();
    operator=undefined;
    if(screen.textContent!=='ERROR'){
        if(screen.textContent.includes('-')===false){
            screen.textContent = '-'+screen.textContent;
            num+=screen.textContent;
    }
    else if(screen.textContent.includes('-')){
        screen.textContent = screen.textContent.replace('-','');
        num+=screen.textContent;
    }
    operand[0]=Number(num);
    num='';
    }
}
let buttonBackspace = document.querySelector('.backspace');
buttonBackspace.addEventListener('click',backspaceButton);
function backspaceButton(){
    if(num.length>0){
        num=num.slice(0,num.length-1);
    }
    else {
        if(operand.length>0){
            let result = operand[0];
            num=result.toString();
            num=num.slice(0,num.length-1);
        }
    }
    operand[0]=Number(num);
    screen.textContent=num;
    num='';
    if(screen.textContent.length===0){
        screen.textContent=0;
    }
}

let body = document.querySelector('body');
body.addEventListener('keydown',(e)=>{
    if(e.key<=9){
        num+=e.key;
        screen.textContent=num;
    }
    else if(e.key==='Delete'){
        allClear();
    }
    else if(e.key==='.'){
        comma();
    }
    else if(e.key==='Enter'){
        result();
    }
    else if(e.key==='Backspace'){
        backspaceButton();
    }
    else if(e.key==='+'&&e.shiftKey){
        addButton();
    }
    else if(e.key==='-'){
        subtractButton();
    }
    else if(e.key==='*'&&e.shiftKey){
        multiplyButton();
    }
    else if(e.key==='/'){
        divideButton();
    }
})