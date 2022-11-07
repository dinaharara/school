$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    lazyLoad: false,
    nav: false,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 1
        }
    }
})

let btn = document.querySelector('.top');

window.onscroll = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 200) {
        // btn.style.display = 'flex';
        btn.style.bottom = '30px';
    } else {
        // btn.style.display = 'none';
        btn.style.bottom = '-120px';
    }
}

btn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
