let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").addEventListener("click", ()=>{
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
    cart.classList.remove("active");
    loginForm.classList.remove("active");
});

let cart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").addEventListener("click",()=>{
    cart.classList.toggle("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
    loginForm.classList.remove("active");
});

let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").addEventListener("click", ()=>{
    loginForm.classList.toggle("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
    cart.classList.remove("active");
});


let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").addEventListener("click", ()=>{
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    cart.classList.remove("active");
    loginForm.classList.remove("active");
});


window.onscroll = ()=>{
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
    cart.classList.remove("active");
    loginForm.classList.remove("active");
}

var swiper = new Swiper(".product-slider,.review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides:true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
      545: {
        slidesPerView: 1.5,
      },
      610: {
        slidesPerView: 1.75,
      },
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      },
    },
  });