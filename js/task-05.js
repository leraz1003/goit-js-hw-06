const inputLabel = document.querySelector('#name-input');
const outputLabel = document.querySelector('#name-output');


inputLabel.addEventListener('input', (event)=>{
   if(event.currentTarget.value === "") {
    outputLabel.textContent = "Anonymous";
} else
outputLabel.textContent = event.currentTarget.value;
})
   
    

