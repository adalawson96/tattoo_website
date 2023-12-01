document.addEventListener('DOMContentLoaded', function () {
    // navbar toggle
    let navBar = document.querySelector('.navLink');
    let menuBar = document.querySelector('#menuBtn');

    menuBar.onclick = () => {
        navBar.classList.toggle('active');
        menuBar.classList.toggle('bx-x');
        console.log('clicked');
    }

    // let swiper = new Swiper(".mySwiper", {
    //     spaceBetween: 30,
    //     centeredSlides: true,
    //     // loop: true,
    //     autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: false,
    //     },
    // });

    // product section
    let swiper = new Swiper(".myProduct", {
        WatchSlidesProgress: true,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            550:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        }
      
    });
});
