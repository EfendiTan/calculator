function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
let operator;
function operate(operator,a,b){
    if(operator===add){
        return add(a,b);
    }
    else if(operator===subtract){
        return subtract(a,b);
    }
    else if(operator===multiply){
        return multiply(a,b);
    }
    else if(operator===divide){
        return divide(a,b);
    }
}

const numBasket=[0]
let screen = document.querySelector('.screen');
screen.textContent = numBasket;

// THIS ONLY DELETE 1 DIGIT (BACKSPACE BUTTON IDEA)
// let buttonClear=document.querySelector('.clear');
// buttonClear.addEventListener('click',()=>{
//     numBasket.pop()
//     screen.textContent=Number(numBasket.join(''));
// })

let buttonClear=document.querySelector('.clear');
buttonClear.addEventListener('click',()=>{
    while(numBasket.length!==0){
        numBasket.pop();
    }
    screen.textContent=Number(numBasket.join(''));
})

let buttonOne = document.querySelector('.one')
buttonOne.addEventListener('click',()=>{
    numBasket.push(1);
    screen.textContent=Number(numBasket.join(''));
})
let buttonTwo = document.querySelector('.two')
buttonTwo.addEventListener('click',()=>{
    numBasket.push(2);
    screen.textContent=Number(numBasket.join(''));
})
let buttonThree = document.querySelector('.three')
buttonThree.addEventListener('click',()=>{
    numBasket.push(3);
    screen.textContent=Number(numBasket.join(''));
})
let buttonFour = document.querySelector('.four')
buttonFour.addEventListener('click',()=>{
    numBasket.push(4);
    screen.textContent=Number(numBasket.join(''));
})
let buttonFive = document.querySelector('.five')
buttonFive.addEventListener('click',()=>{
    numBasket.push(5);
    screen.textContent=Number(numBasket.join(''));
})
let buttonSix = document.querySelector('.six')
buttonSix.addEventListener('click',()=>{
    numBasket.push(6);
    screen.textContent=Number(numBasket.join(''));
})
let buttonSeven = document.querySelector('.seven')
buttonSeven.addEventListener('click',()=>{
    numBasket.push(7);
    screen.textContent=Number(numBasket.join(''));
})
let buttonEight = document.querySelector('.eight')
buttonEight.addEventListener('click',()=>{
    numBasket.push(8);
    screen.textContent=Number(numBasket.join(''));
})
let buttonNine = document.querySelector('.nine')
buttonNine.addEventListener('click',()=>{
    numBasket.push(9);
    screen.textContent=Number(numBasket.join(''));
})
let buttonZero = document.querySelector('.zero')
buttonZero.addEventListener('click',()=>{
    numBasket.push(0);
    screen.textContent=Number(numBasket.join(''));
})
let buttonComma = document.querySelector('.comma')
buttonComma.addEventListener('click',()=>{
    numBasket.push('.');
    screen.textContent=Number(numBasket.join(''));
})
let buttonAdd = document.querySelector('.add');
buttonAdd.addEventListener('click',()=>{
    operator=add;
})
let buttonResult = document.querySelector('.result');
buttonResult.addEventListener('click',()=>{
    console.log(operator)
    console.log(Number(numBasket.join('')))
})



