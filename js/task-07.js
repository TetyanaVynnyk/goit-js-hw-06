const inputFontSizeControler = document.querySelector('input#font-size-control');
const textEl = document.querySelector('span#text');

inputFontSizeControler.addEventListener('change', rangeValue);

function rangeValue(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}