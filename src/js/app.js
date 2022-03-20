import $ from "../../node_modules/jquery/dist/jquery.js";
import * as slick from "../../node_modules/slick-carousel/slick/slick.min.js";

let hamburger = $(".hamburger");
let menu = $('.menu');
let menuItem = $(".menu__item");


$(window).on('load', () =>{
    hamburger.on("click", () => {
      hamburger.toggleClass("hamburger--active");
      menu.toggleClass("menu--active");
    });
    menuItem.on('click', () => {
      hamburger.removeClass("hamburger--active");
      menu.removeClass("menu--active");
    });

    $(".slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      adaptiveHeight: true,
      cssEase: "linear",
      nextArrow:
        '<button type="button" class="slick-next slider__arrow slider__left">' +
        '<img src="assets/img/icons/arrow-left.svg" alt="">' +
        +"</button>",
      prevArrow:
        '<button type="button" class="slick-prev slider__arrow slider__right">' +
        '<img src="assets/img/icons/arrow-left.svg" alt="">' +
        +"</button>",
    });
})