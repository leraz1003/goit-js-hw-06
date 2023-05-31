const buttonDecrement = document.querySelector('button[data-action="decrement"]')
let value = document.querySelector('#value')
const buttonIncrement = document.querySelector('button[data-action="increment"]') 


let counterValue = 0;
value.textContent = counterValue;


buttonIncrement.addEventListener('click', () =>{
    counterValue +=1;
    value.textContent = counterValue;
})

buttonDecrement.addEventListener('click', () =>{
    if (counterValue>0){
        counterValue -=1;
    }
    value.textContent = counterValue;
})


