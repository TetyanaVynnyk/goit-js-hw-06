const inputName = document.querySelector('input#name-input');
const outputName = document.querySelector('span#name-output');

function inputEvent(event){
    outputName.textContent = event.currentTarget.value ? event.currentTarget.value : `Anonymous`;
}

inputName.addEventListener('input', inputEvent);