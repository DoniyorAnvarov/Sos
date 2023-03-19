let headerNavMenu = document.querySelector('.nav__menu');
let headerNavLine = document.querySelector('.nav__line');
let headerList = document.querySelector('.nav__list');
let headerSlider = document.querySelector('.header_slider');
let headerIconca = document.querySelector('.header_iconca'); 

headerNavLine.addEventListener('click', function (e) {
   this.classList.toggle('active');
   headerList.classList.toggle('active');
   headerSlider.classList.toggle('active');
   headerIconca.classList.toggle('active');
   headerNavMenu.classList.toggle('active');
})

$('.ask').on('click', function () {
    
   $('.ask').not(this).removeClass('active').next().slideUp(500)
   $(this).toggleClass('active').next().slideToggle(500)

})



$('.header_ask').on('click', function () {
   
 $('.ask').not(this).removeClass('header_active').next().slideUp(500)
 $(this).toggleClass('header_active').next().slideToggle(500)

})


const infoSlider = new Swiper(".info__slider", {
   slidePerView: 1,
   spaceBetween: 10,
   loop: true,
   setTimeout:1,
 
   navigation: {
     nextEl: ".info__slider-next",
     prevEl: ".info__slider-prev"
   }
 })


 $(window).on('scroll', function () {
 
   if ($(window).scrollTop() >= 300) {
     $('.js-btn-top').addClass('show')
   } else {
     $('.js-btn-top').removeClass('show')
   }
   
 })
 
 $('.js-btn-top').on('click', function () {
   
   $('html').animate({
     
     scrollTop: 0
     
   }, 1500)
   
 })
