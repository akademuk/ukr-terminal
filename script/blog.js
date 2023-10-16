// Бургер меню
document.querySelectorAll('.burger-link-close').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.burger-icon').classList.remove('open');
        document.querySelector('.burger-menu').classList.remove('open');
    });
});
document.querySelector('.burger-icon').addEventListener('click', () => {
    document.querySelector('.burger-icon').classList.toggle('open');
    document.querySelector('.burger-menu').classList.toggle('open');
});
// --------------------------------------------------------------------

// Бургер меню 2
document.querySelectorAll('.burger-link-close2').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.burger-icon2').classList.remove('open');
        document.querySelector('.burger-menu2').classList.remove('open');
        document.querySelector('.body').classList.remove('open');
    });
  });
  document.querySelector('.burger-icon2').addEventListener('click', () => {
    document.querySelector('.burger-icon2').classList.toggle('open');
    document.querySelector('.burger-menu2').classList.toggle('open');
    document.querySelector('.body').classList.toggle('open');
  });
  // --------------------------------------------------------------------

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
  