const $simpleCarousel = document.querySelector(".js-carousel--simple");

new Glider($simpleCarousel, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: ".js-carousel--simple-dots",
    arrows: {
        prev: ".js-carousel--simple-prev",
        next: ".js-carousel--simple-next",
    },
});

