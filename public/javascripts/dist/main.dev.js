"use strict";

// NiceScroll Configuration
window.onload = function () {
  document.querySelector("body").niceScroll();
}; // Owl Carousel 2 configuration


$(function () {
  $(".owl-carousel").owlCarousel({
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      960: {
        items: 3
      },
      1280: {
        items: 4,
        nav: false
      }
    }
  });
}); // another owl-carousel configuration for reviews

$(function () {
  $(".owl-carousel-reviews").owlCarousel({
    dots: true,
    responsive: {
      0: {
        items: 1
      }
    }
  });
}); // another owl-carousel configuration for test

$(function () {
  $(".owl-carousel-cards").owlCarousel({
    margin: 30,
    dots: true,
    navs: false,
    responsive: {
      0: {
        items: 1
      }
    }
  });
});