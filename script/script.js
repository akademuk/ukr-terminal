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