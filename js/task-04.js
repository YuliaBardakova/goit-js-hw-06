let counterValue = 0

const displayCounter = document.querySelector('#value')
const buttonTodeliver = document.querySelector('button[data-action="decrement"]')
const buttonMinus = document.querySelector('button[data-action="increment"]')


buttonMinus.addEventListener('click', () => {
	counterValue -= 1;
	displayCounter.textContent = counterValue
})
buttonTodeliver.addEventListener('click', () => {
	counterValue += 1;
	displayCounter.textContent = counterValue
})