// Слайдер Наші переваги
const advantages = new Swiper('.advantages-slider', {
    slidesPerView: "auto",
    spaceBetween: 24,
    centeredSlides: true,
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

// Слайдер Новини компанії
const news = new Swiper('.news-slider', {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".news-next",
        prevEl: ".news-prev",
      },
      pagination: {
        el: ".news-pagination",
        clickable: true
      },
});

// Слайдер на hero экране
const widget = new Swiper('.animation-widget1', {
  slidesPerView: 1,
  loop: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: 'fade', // Эффект затухания
});

// Слайдер на hero экране
const widget1 = new Swiper('.animation-widget', {
  slidesPerView: 1,
  loop: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: 'slide', // Эффект затухания
});

// Слайдер партнеры
const partners = new Swiper('.partners-slider', {
  slidesPerView: "auto",
  spaceBetween: 0,
  loop: false, 
});

// Аккардион
$(document).ready(() => {
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
    const widget = document.querySelector('.animation-widget1');
    const animationDelay = 3000;
    setTimeout(() => {
      widget.style.transform = 'translateX(0%)';
    }, animationDelay);
});

// Анимация на hero экране
document.addEventListener('DOMContentLoaded', () => {
    const gifAnimation = document.getElementById('gifAnimation');
    gifAnimation.classList.add('show-animation');
    setTimeout(() => {
      gifAnimation.classList.remove('show-animation');
      gifAnimation.classList.add('hide-animation');
    }, 3000);
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
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  
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
        document.querySelector('.body').classList.remove('open');
    });
});
document.querySelector('.burger-icon').addEventListener('click', () => {
    document.querySelector('.burger-icon').classList.toggle('open');
    document.querySelector('.burger-menu').classList.toggle('open');
    document.querySelector('.body').classList.toggle('open');
});
// --------------------------------------------------------------------
  


const animationWidget = document.getElementById('animation-widget1');
const widgetBar = document.getElementById('widget-bar');

// Функция для проверки прокрутки и управления видимостью
function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop >= 600) {
    animationWidget.style.display = 'none';
    widgetBar.style.display = 'block';
  } else {
    animationWidget.style.display = 'block';
    widgetBar.style.display = 'none';
  }
}

// Вызываем функцию при прокрутке страницы
window.addEventListener('scroll', handleScroll);

// Вызываем функцию при загрузке страницы для начального состояния
window.addEventListener('load', handleScroll);

// --------------------------------------------------------------------














function animateCards() {
  const cards = document.querySelectorAll('#card-container .cards');
  let isScrollingDown = false;

  window.addEventListener('scroll', function() {
    const rect = cards[0].getBoundingClientRect();
    isScrollingDown = rect.top >= 0;

    cards.forEach(function(card, index) {
      if (isScrollingDown) {
        card.classList.add('animate__animated', 'animate__fadeInLeft');
        card.style.animationDelay = `${index * 0.2}s`;
      } else {
        card.classList.remove('animate__animated', 'animate__fadeInLeft');
      }
    });
  });
}

// Вызываем функцию для анимации карточек
animateCards();



const elementsToAnimate = document.querySelectorAll('.arguments-line');

elementsToAnimate.forEach((element, index) => {
  new Waypoint({
    element: element,
    handler: function(direction) {
      if (direction === 'down') {
        element.classList.add('animate');
      } else {
        element.classList.remove('animate');
      }
    },
    offset: 'bottom-in-view'  // Элемент появится, когда его нижняя часть будет видна в окне браузера
  });
});





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








  // --------------------------------------------------------------------