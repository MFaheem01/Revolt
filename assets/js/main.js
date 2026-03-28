var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,         // Mobile par 2
    spaceBetween: 30,        // Items ke darmiyan gap
    loop: true,              // Infinite loop
    speed: 10000,             // Jitna zyada number hoga, utna slow aur smooth chalay ga
    allowTouchMove: false,   // User stop na kar sakay
    autoplay: {
        delay: 0,            // Zero delay for continuous move
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 6, // Desktop par exactly 6 items
        },
    },
});

var swiper = new Swiper(".mySwiperCard", {
    loop: true,
    grabCursor: true,
    // Slide change hone ki speed (1 second transition)
    speed: 1000,
    autoplay: {
        delay: 2000, // 2 second ka intezar
        disableOnInteraction: false,
    },
    breakpoints: {
        // Mobile: 1 card
        0: { slidesPerView: 1, spaceBetween: 10 },
        // Tablet: 2 cards
        640: { slidesPerView: 2, spaceBetween: 20 },
        // Desktop: 3 cards
        1024: { slidesPerView: 3, spaceBetween: 30 },
    },
});

// swiper blog
var swiper = new Swiper(".mySwiperBlog", {
    loop: true,
    grabCursor: true,
    speed: 1000,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
    },
});

// about us swiper
var swiperAbout = new Swiper(".mySwiperAbout", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    speed: 10000,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
    },
});
