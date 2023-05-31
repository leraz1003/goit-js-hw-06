const inputSlider = document.querySelector('#font-size-control')
console.log(inputSlider)
const outputText = document.querySelector('#text')
console.log(outputText)

inputSlider.addEventListener('input', ()=>{
    outputText.style.fontSize = `${inputSlider.value}.px`; 
})

