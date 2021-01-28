'use strict'

let range = document.querySelector('.form__range')
let formValue = document.querySelector('.form__value')

range.addEventListener('change', () => {
	let rangeValue = range.value;
	formValue.innerHTML = rangeValue;
})