// Все обьекты открывающие попапы !добавить класс к ссылке, которая откроет попап
const popupLinks = document.querySelectorAll('._popup-link');
const body = document.querySelector('body');
// Все обьекты без дополнительного паддинга !добавить класс к обьекту который не нужно двигать
const popupPadding = document.querySelectorAll('._popup-padding');

// Для фикса двойных нажатий
let unlock = true;
// Фикс скрола, !указать равным transition (transition: all 0.9s ease 0s;)
const timeout = 900;

if (popupLinks.length > 0) {
	for (let i = 0; i < popupLinks.length; i++) {
		const popupLink = popupLinks[i];
		popupLink.addEventListener('click', (e) => {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const currentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			e.preventDefault();
		})
	}
}

// Все обьекты закрывающие попапы !добавить класс к ссылке, которая закрое попап
const popupCloseObject = document.querySelectorAll('._popup-close');

if (popupCloseObject.length > 0) {
	for (let i = 0; i < popupCloseObject.length; i++) {
		const el = popupCloseObject[i];
		el.addEventListener('click', (e) => {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		})
	}
}

function popupOpen(currentPopup) {
	if (currentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		currentPopup.classList.add('open');
		currentPopup.addEventListener('click', (e) => {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnlock();
		}
	}
}


function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (popupPadding.length > 0) {
		for (let i = 0; i < popupPadding.length; i++) {
			const el = popupPadding[i];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnlock() {
	setTimeout(function () {
		if (popupPadding.length > 0) {
			for (let i = 0; i < popupPadding.length; i++) {
				const el = popupPadding[i];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout)

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

// Закрытие по нажатию esc
document.addEventListener('keydown', (e) => {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
})

if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
	Element.prototype.closest = function (s) {
		var el = this;

		do {
			if (el.matches(s)) return el;
			el = el.parentElement || el.parentNode;
		} while (el !== null && el.nodeType === 1);
		return null;
	};
}