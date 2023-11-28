// Слайдер Наші переваги
const advantagesSlider = document.querySelector('.advantages-slider');
if (advantagesSlider !== null) {
	const advantages = new Swiper('.advantages-slider', {
		slidesPerView: "auto",
		spaceBetween: 24,
		
		loop: false,
		navigation: {
			nextEl: ".advantages-next",
			prevEl: ".advantages-prev",
		},
		pagination: {
			el: ".advantages-pagination",
			clickable: true
		},
	});
}


// Слайдер Новини компанії
const news2Slider = document.querySelector('.news2-slider');
if (advantagesSlider !== null) {
	const news = new Swiper('.news2-slider', {
		slidesPerView: "auto",
		spaceBetween: 24,
		loop: false,
		navigation: {
			nextEl: ".news-prev",
			prevEl: ".news-next",
		},
		pagination: {
			el: ".news-pagination",
			clickable: true
		},
	});
}



// Функция инициализации слайдера


function initSlider() {
	const totalSlidesWidget = document.querySelectorAll('.animation-widget1 .swiper-slide').length;

	// Генерируем случайное число от 0 до (totalSlidesWidget - 1)
	const randomSlideIndexWidget = Math.floor(Math.random() * totalSlidesWidget);

	const widget = new Swiper('.animation-widget1', {
		slidesPerView: 1,
		loop: false,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		allowTouchMove: false,
		initialSlide: randomSlideIndexWidget, // Устанавливаем начальный слайд
	});
}

// Устанавливаем таймер на инициализацию слайдера через 3 секунды после загрузки страницы
window.onload = function () {
	setTimeout(initSlider, 1000); // Вызываем функцию initSlider через 3 секунды после загрузки страницы
};




// Слайдер на hero экране
document.addEventListener('DOMContentLoaded', function () {
	const totalSlides = document.querySelectorAll('.animation-widget .swiper-slide').length;
	const randomSlideIndex = Math.floor(Math.random() * totalSlides);

	const widget1 = new Swiper('.animation-widget', {
		direction: 'vertical', // Устанавливаем вертикальное направление скролла
		slidesPerView: 1,
		loop: false,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		effect: 'slide',
		allowTouchMove: false,
		initialSlide: randomSlideIndex,
	});
});


// Слайдер партнеры
const partners = new Swiper('.partners-slider', {
	slidesPerView: "auto",
	spaceBetween: 0,
	loop: false,
});

// Аккардион
jQuery(document).ready(function ($) {
	// Hide all accordion contents when the page loads
	$(".accardion-contents").hide();

	// Add "active" class to the first .accardion-heading element
	$(".accardion-heading:first").addClass("active");

	// Show the content of the first accordion section
	$(".accardion-heading:first")
		.next(".accardion-contents")
		.slideDown();

	$(".accardions").on("click", ".accardion-heading", function () {
		const $accordionContainer = $(this).closest(".accordion-container");

		// Check if the current heading has the "active" class
		const isActive = $(this).hasClass("active");

		// Hide all accordion contents
		$(".accardion-contents").slideUp(300);

		// Remove the "active" class from all headings
		$(".accardion-heading").removeClass("active");

		// Remove the "active" class from all accordion containers
		$(".accordion-container").removeClass("active");

		if (!isActive) {
			// Show the content and add the "active" class only to the current heading and its accordion-container
			$(this).next().slideDown();
			$accordionContainer.addClass("active");
			$(this).addClass("active");
		}
	});
});

// Выезжает блок на hero экране
document.addEventListener('DOMContentLoaded', () => {
	if (window.innerWidth > 576) {
		const widget = document.querySelector('.animation-widget1');
		const animationDelay = 3000;
		if (widget) {
			setTimeout(() => {
				widget.style.transform = 'translateX(0%)';
			}, animationDelay);
		}
	} else {
		const widget = document.querySelector('.animation-widget1');
		const animationDelay = 1000;
		if (widget) {
			setTimeout(() => {
				widget.style.transform = 'translateX(0%)';
			}, animationDelay);
		}
	}
});

// Анимация на hero экране
document.addEventListener('DOMContentLoaded', () => {
	if (window.innerWidth > 576) {
		const gifAnimation = document.getElementById('gifAnimation');
		if (gifAnimation) {
			gifAnimation.classList.add('show-animation');
			setTimeout(() => {
				gifAnimation.classList.remove('show-animation');
				gifAnimation.classList.add('hide-animation');
			}, 3000);
		}
	}
});


// Вывести время и дату
function getCurrentDateTime() {
	const now = new Date();

	const daysOfWeek = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
	const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];

	const dayOfWeek = daysOfWeek[now.getDay()];
	const dayOfMonth = now.getDate();
	const month = months[now.getMonth()];

	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');
	const seconds = now.getSeconds().toString().padStart(2, '0');

	const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;
	const formattedTime = `${hours}:${minutes}`;

	return { formattedDate, formattedTime };
}
function updateCurrentDateTime() {
	const dateElements = document.querySelectorAll('.name-link:first-child');
	const timeElements = document.querySelectorAll('.name-link:last-child');

	const { formattedDate, formattedTime } = getCurrentDateTime();

	// Обновляем каждый элемент с классом .name-link
	dateElements.forEach((element) => {
		element.textContent = formattedDate;
	});

	timeElements.forEach((element) => {
		element.textContent = formattedTime;
	});
}
// Обновляем текущую дату и время при загрузке страницы
updateCurrentDateTime();
// Обновляем текущую дату и время каждую секунду
setInterval(updateCurrentDateTime, 1000);


// Бургер меню
document.querySelectorAll('.burger-link-close').forEach(link => {
	link.addEventListener('click', () => {
		document.querySelector('.burger-icon').classList.remove('open');
		document.querySelector('.burger-menu').classList.remove('open');
		document.querySelector('body').classList.toggle('open');
	});
});
document.querySelector('.burger-icon').addEventListener('click', () => {
	document.querySelector('.burger-icon').classList.toggle('open');
	document.querySelector('.burger-menu').classList.toggle('open');
	document.querySelector('body').classList.remove('open');
});
// --------------------------------------------------------------------

jQuery(document).ready(function ($) {
	// Для того чтобы наш слайдер работал на ширине меньше 1280px нужно поместить наш код в if ($(window).width() < 1280)
	if ($(window).width() > 1280) {
		const animationWidget = document.getElementById('animation-widget1');
		const widgetBar = document.getElementById('widget-bar');
		const hiddenItems = document.querySelectorAll('.hidden-items');
		const burgerMenuMain = document.querySelectorAll('.burger-menu-main');

		// Функция для проверки прокрутки и управления видимостью
		function handleScroll() {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

			if (widgetBar && animationWidget && hiddenItems && burgerMenuMain) {
				if (scrollTop >= 600) {
					animationWidget.style.opacity = '0';
					widgetBar.style.display = 'block';
					hiddenItems.forEach(item => {
						item.classList.add("active");
					});
					burgerMenuMain.forEach(item => {
						item.classList.add("active");
					});
				} else {
					animationWidget.style.opacity = '1';
					widgetBar.style.display = 'none';
					hiddenItems.forEach(item => {
						item.classList.remove("active");
					});
					burgerMenuMain.forEach(item => {
						item.classList.remove("active");
					});
				}
			}
		}

		// Вызываем функцию при прокрутке страницы
		window.addEventListener('scroll', handleScroll);

		// Вызываем функцию при загрузке страницы для начального состояния
		window.addEventListener('load', handleScroll);
	}

	// --------------------------------------------------------------------
});


// Бургер меню 2
document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.burger-link-close').forEach(link => {
		link.addEventListener('click', () => {
			document.querySelector('.burger-icon2').classList.remove('open');
			document.querySelector('.burger-menu2').classList.remove('open');
			document.querySelector("body").classList.remove('open');
		});
	});
	document.querySelector('.burger-icon2').addEventListener('click', () => {
		document.querySelector('.burger-icon2').classList.toggle('open');
		document.querySelector('.burger-menu2').classList.toggle('open');
		document.querySelector("body").classList.toggle('open');
	});
});
// --------------------------------------------------------------------










function animateCards() {
	const cards = document.querySelectorAll('#card-container .cards');
	let isScrollingDown = false;

	if (cards.length > 0) {
		window.addEventListener('scroll', function () {
			const rect = cards[0].getBoundingClientRect();
			isScrollingDown = rect.top >= 0;

			cards.forEach(function (card, index) {
				if (isScrollingDown) {
					card.classList.add('animate__animated', 'animate__fadeInLeft');
					card.style.animationDelay = `${index * 0.2}s`;
				} else {
					card.classList.remove('animate__animated', 'animate__fadeInLeft');
				}
			});
		});
	}

}

// Вызываем функцию для анимации карточек
animateCards();



const elementsToAnimate = document.querySelectorAll('.arguments-line');

elementsToAnimate.forEach((element, index) => {
	new Waypoint({
		element: element,
		handler: function (direction) {
			if (direction === 'down') {
				element.classList.add('animate');
			} else {
				element.classList.remove('animate');
			}
		},
		offset: 'bottom-in-view'  // Элемент появится, когда его нижняя часть будет видна в окне браузера
	});
});



jQuery(document).ready(function ($) {

	// Плавный переход к якорю 
	$('a[href^="#"]').on('click', function (event) {
		event.preventDefault();
		var target = $(this.hash);
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 800);
		}
	});

});






// --------------------------------------------------------------------



const seoText = document.querySelector('.seo-text');
const toggleButton = document.querySelector('.toggle-button');

if (toggleButton) {
	toggleButton.addEventListener('click', function () {
		seoText.classList.toggle('collapsed');
		seoText.classList.toggle('expanded');

		if (seoText.classList.contains('collapsed')) {
			toggleButton.textContent = 'згорнути текст';
		} else {
			toggleButton.textContent = 'розгорнути текст';
		}
	});
}




function animateCards2() {
	const cards = document.querySelectorAll('#swiper-wrapper .swiper-slide');

	window.addEventListener('scroll', function () {
		const scrollTop = window.pageYOffset;

		cards.forEach(function (card, index) {
			const rect = card.getBoundingClientRect();
			const threshold = window.innerHeight / 1.5;  // Используем порог

			if (rect.top <= threshold && rect.bottom >= 0) {
				card.classList.add('animate__animated', 'animate__fadeInRight');
				card.style.animationDelay = `${index * 0.5}s`;
			} else {
				card.classList.remove('animate__animated', 'animate__fadeInRight');
			}
		});
	});
}

// Вызываем функцию для анимации карточек
animateCards2();


function animateCards3() {
	const cards = document.querySelectorAll('#swiper-wrapper2 .swiper-slide');

	window.addEventListener('scroll', function () {
		const scrollTop = window.pageYOffset;

		cards.forEach(function (card, index) {
			const rect = card.getBoundingClientRect();
			const threshold = window.innerHeight / 1.5;  // Используем порог

			if (rect.top <= threshold && rect.bottom >= 0) {
				card.classList.add('animate__animated', 'animate__fadeInRight');
				card.style.animationDelay = `${index * 0.5}s`;
			} else {
				card.classList.remove('animate__animated', 'animate__fadeInRight');
			}
		});
	});
}

// Вызываем функцию для анимации карточек
animateCards3();




jQuery(document).ready(function ($) {
	// Выбираем все ссылки с классом "page"
	$('.wp-pagenavi .page, .wp-pagenavi .current').each(function () {
		// Получаем текст из ссылки
		var text = $(this).text();
		// Преобразуем его в число
		var number = parseInt(text, 10);

		// Проверяем, меньше ли число 10
		if (number < 10) {
			// Если меньше, добавляем ноль спереди и устанавливаем обновленный текст
			$(this).text('0' + number);
		}
	});
});


document.addEventListener('DOMContentLoaded', function () {
	// Попап
	const openPopupButtons = document.querySelectorAll('.openPopupButton');
	const closePopupButton = document.getElementById('closePopupButton');
	const popup = document.getElementById('popup');

	function openPopup() {
		popup.style.display = 'flex';
		document.querySelector('.home').classList.toggle('open');
		document.querySelector('.burger-menu').classList.remove('open');
		document.querySelector('.burger-menu2').classList.remove('open');
		document.querySelector('.burger-icon2').classList.remove('open');
	}

	function closePopup() {
		popup.style.display = 'none';
		document.querySelector('.home').classList.remove('open');
	}

	openPopupButtons.forEach(function (button) {
		button.addEventListener('click', openPopup);
	});

	closePopupButton.addEventListener('click', closePopup);

	window.addEventListener('click', (event) => {
		if (event.target === popup) {
			closePopup();
		}
	});

	window.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && popup.style.display === 'flex') {
			closePopup();
		}
	});
});


// --------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', function () {
	const forms = document.querySelector('.formConsultFormRow form');
	const submitHidden = document.getElementById('sumbit-hidden');
	const closeSubmitHiddenButton = document.getElementById('sumbit-hidden-close');

	if (submitHidden && forms && closeSubmitHiddenButton) {
		forms.addEventListener('wpcf7mailsent', function () {
			submitHidden.classList.add('active');
		});
		closeSubmitHiddenButton.addEventListener('click', function () {
			submitHidden.classList.remove('active');
		});
	}
});

function scrollToElement(elementId, offset) {
	var element = document.getElementById(elementId);
	if (element) {
		var elementPosition = element.getBoundingClientRect().top + window.scrollY;
		window.scrollTo({
			top: elementPosition - offset,
			behavior: 'smooth'
		});
	}
}