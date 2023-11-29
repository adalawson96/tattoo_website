document.addEventListener('DOMContentLoaded', function () {
    // navbar toggle
    let navBar = document.querySelector('.navLink');
    let menuBar = document.querySelector('#menuBtn');

    menuBar.onclick = () => {
        navBar.classList.toggle('active');
        menuBar.classList.toggle('bx-x');
        console.log('clicked');
    }

    // Swiper initialization
    const swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        // loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});
