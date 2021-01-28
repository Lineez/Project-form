// Инициализируем Swiper
// Добавить класс обьекта который будет слайдером
new Swiper('.swiper-container', {

	// // Автовысота
	// autoHeight: true,

	// Отступ между слайдами
	spaceBetween: 0,

	// // Стартовый слайд ( отсчет с нуля )
	// initialSlide: 1,

	// Вкл\откл свайпов на пк
	simulateTouch: true,
	// Курсор перетаскивания
	grabCursor: true,

	// =======================================================================
	// Навигация

	// Стрелки, выводятся в :after
	// navigation: {
	// 	prevEl: '.swiper-button-prev',
	// 	nextEl: '.swiper-button-next',
	// },

	// Мобайл-first подход (min-width: ...)
	breakpoints: {
		768: {
			
		}
	},

	// // ========================================================
	// Включить предзагрузку изображений
	preloadImages: false,
	// Ленивая загрузка
	lazy: {
		// Начало загрузки при свайпе
		loadOnTransitionStart: true,
		// Подгружать prev/next картинки
		loadPrevNext: true,
	},

	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым сладам
	watchSlidesVisibility: true,


	// // Бесконечность
	loop: true,
	// // Количество?
	// loopedSlides: 2,

	// // Свободный режим
	// freeMode: true,

	// // Скорость переключения слайдов
	// speed: 700,

	// // Автопрокрутка
	// autoplay: {
	// 	// Задержка
	// 	delay: 1000,
	// 	// Закончить на последнем слайде
	// 	stopOnLastSlide: true,
	// 	// откючить после юзера
	// 	disableOnInteraction: false,
	// },


	// // Количество выводимых слайдов ( в том числе дробные числа)
	// // если slidesPerView: 'auto', Добваить swiper-slide - width: auto;
	// slidesPerView: 1,
	// // Переключение слайдов при клике ( центрирование среди нескольких слайдов )
	// slideToClickedSlide: true,

	// // Количество пролистываемых слайдов
	// slidesPerGroup: 1,
	// // Активный слайд по центру ( для группы слайдов)
	// centeredSlides: true,

	// // Чувствительность свайпа
	// touchRatio: 1,
	// // Угол срабатывания свайпа
	// touchAngle: 45,


	// // вертикальный слайд \\ явно задать высоту слайдера
	// 	direction: 'vertical',
	// 	freeMode: true,

	// // Мультирядность? явно задать высоту слайдов
	// autoHeight: false,
	// slidesPerColumn: 2,


	// // =======================================================================
	// Пагинация
	pagination: {
		el: '.swiper-pagination',


		// // Буллеты
		// type: 'bullets',
		// clickable: true,
		// // Динамические буллеты
		// dynamicBullets: true,
		// // Кастомные буллеты
		// // !!!!!!!Не работает c dynamicBullets
		// renderBullet: function(index, className) {
		// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
		// },


		// // Фракция
		// type: 'fraction',
		// // Кастомная фракция
		// renderFraction: function(currentClass, totalClass) {
		// 	return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
		// },


	// 	// Прогрессбар
	// 	type: 'progressbar'
	},

	// =======================================================================
	// 	// Скролл
	// 	scrollbar: {
	// 		el: '.swiper-scrollbar',
	// 		// Перетаскивание скролла
	// 		draggable: true,
	// 	},

	// // =======================================================================
	// 	// Навигация по хешу ( добавить атрибут data-hash="foo[i]" к "слайду")
	// 	hashNavigation: {
	// 		// отслеживать ( дает возможность навигации по стрелкам браузера(хешу посещенных слайдов))
	// 		watchState: true,
	// 	},


	// // =======================================================================
	// // Управление клавиатурой
	// keyboard: {
	// 	// Включить
	// 	enabled: true,
	// 	// Только в пределах слайдера (не на всей странице)
	// 	onlyInViewport: true,
	// 	// Включить pageUp\Down
	// 	pageUpDown: true,
	// }

	// // Прокрутка колесом мыши
	// mousewheel: {
	// 	// Чувствительность
	// 	sensitivity: 1,
	// 	// Класс обьекта на котором будет срабатывать ( слайдер? )
	// 	// eventsTarget: '.swiper-container'
	// },

	// // Эффект по умолчанию
	// effect: 'slide',

	// // Эффект прозрачности
	// effect: 'fade',
	// fadeEffect: {
	// 	// Параллельная смена прозрачности
	// 	crossFade: true,
	// },

	// // Эффект переворота
	// effect: 'flip',
	// flipEffect: {
	// 	// Тень
	// 	slideShadows: true,
	// 	// Показ только активного слайда
	// 	limitRotation: true,
	// },

	// Эффект 3д куба
	// effect: 'cube',
	// cubeEffect: {
	// 	slideShadows: true,
	// 	shadow: true,
	// 	shadowOffset: 20,
	// 	shadowScale: 0.95,
	// },

	// Эффект потока
	// effect: 'coverflow',
	// coverFlowEffect: {
	// 	// Угол
	// 	rotate: 20,
	// 	// Наложение
	// 	stretch: 50,
	// 	// Тень
	// 	slideShadows: true,
	// },

});