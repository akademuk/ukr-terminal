const advantages = new Swiper('.advantages-slider', {
    slidesPerView: "auto",
    spaceBetween: 24,
    centeredSlides: true,
    loop: false, // Отключение бесконечной петли
    navigation: {
        nextEl: ".advantages-next",
        prevEl: ".advantages-prev",
      },
      pagination: {
        el: ".advantages-pagination",
        clickable: true
      },
});


const news = new Swiper('.news-slider', {
    slidesPerView: "auto",
    spaceBetween: 24,
    centeredSlides: true,
    loop: false, // Отключение бесконечной петли
    navigation: {
        nextEl: ".news-next",
        prevEl: ".news-prev",
      },
      pagination: {
        el: ".news-pagination",
        clickable: true
      },
});

const partners = new Swiper('.partners-slider', {
    slidesPerView: "auto",
    spaceBetween: 0,

    loop: false, // Отключение бесконечной петли
});