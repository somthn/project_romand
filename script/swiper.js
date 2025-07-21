const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'slide', // 페이드 효과
    fadeEffect: {
        crossFade: true,
    },
    slidesPerView: 4, // 기본: PC용 (2개씩)
    breakpoints: {
        // 모바일: 1개씩 보이게
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 4,
        },
    },
});

