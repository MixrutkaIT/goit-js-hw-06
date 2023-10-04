const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

let currentValue = 0;

function updateCounterUI() {
  counterValue.textContent = currentValue;
}
decrementBtn.addEventListener('click', () => {
  currentValue -= 1;
  updateCounterUI();
});
incrementBtn.addEventListener('click', () => {
  currentValue += 1;
  updateCounterUI();
});

updateCounterUI();
