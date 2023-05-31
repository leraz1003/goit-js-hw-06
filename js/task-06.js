const input = document.querySelector('#validation-input')
const currentLenght = input.dataset.length;

input.addEventListener('blur', (event)=>{
    const inputLenght = input.value.length;
    if(inputLenght < currentLenght || inputLenght >currentLenght ) {
        input.classList.add('invalid');
    } else
        input.classList.remove('invalid');
        input.classList.add('valid');
})