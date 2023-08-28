import "./js/common";
import "./scss/main.scss";
import "./css/main.css";

if ($(window).width() < 992) {
  $(".swiper-wrapper").removeClass("gallery__slider");
  $(".swiper-wrapper").removeClass("main-banner__cards");
  $(".swiper-wrapper").removeClass("cards");

  const gallery = new Swiper(".swiper.gallery-slider", {
    loop: true,
    spaceBetween: 20,

    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 2,
      },
    },
  });

  const cards = new Swiper(".swiper.cards-slider", {
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="custom-dot ' + className + '"><div class="custom-dot__small"></div></div>';
      },
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  const doubleCards = new Swiper(".swiper.double-cards-slider", {
    loop: true,
    spaceBetween: 32,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="custom-dot ' + className + '"><div class="custom-dot__small"></div></div>';
      },
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
}
if ($(window).width() < 768) {
  $(".swiper-wrapper").removeClass("places");

  const places = new Swiper(".swiper.places-slider", {
    loop: true,
    spaceBetween: 32,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="custom-dot ' + className + '"><div class="custom-dot__small"></div></div>';
      },
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
}

$(".menu-mobile__arrow-icon").click(function () {
  if (!$(this).parent().parent().hasClass("active")) {
    $(".menu-mobile__lvl1.active .menu-mobile__lvl2").slideUp();
    $(".menu-mobile__lvl1.active").removeClass("active");
    $(".menu-mobile__lvl2-item.active .menu-mobile__lvl3").slideUp();
    $(".menu-mobile__lvl2-item.active").removeClass("active");
    $(this).parent().parent().toggleClass("active");
    $(this)
      .parent()
      .next()
      .slideToggle({
        start: function () {
          $(this).css({
            display: "flex",
          });
        },
      });
  } else {
    $(".menu-mobile__lvl1.active .menu-mobile__lvl2").slideUp();
    $(".menu-mobile__lvl1.active").removeClass("active");
    $(".menu-mobile__lvl2-item.active .menu-mobile__lvl3").slideUp();
    $(".menu-mobile__lvl2-item.active").removeClass("active");
  }
});

$(".menu-mobile__arrow-icon--lvl2").click(function () {
  if (!$(this).parent().parent().hasClass("active")) {
    $(".menu-mobile__lvl2-item.active .menu-mobile__lvl3").slideUp();
    $(".menu-mobile__lvl2-item.active").removeClass("active");
    $(this).parent().parent().toggleClass("active");
    $(this)
      .parent()
      .next()
      .slideToggle({
        start: function () {
          $(this).css({
            display: "flex",
          });
        },
      });
  } else {
    $(".menu-mobile__lvl2-item.active .menu-mobile__lvl3").slideUp();
    $(".menu-mobile__lvl2-item.active").removeClass("active");
  }
});

$(".header__burger").click(function () {
  $("body").css("overflow", "hidden");
  $(".menu-mobile-mask").addClass("active");
  $(".menu-mobile").addClass("active");
});
$(".menu-mobile__close").click(function () {
  $("body").css("overflow", "visible");
  $(".menu-mobile-mask").removeClass("active");
  $(".menu-mobile").removeClass("active");
});
$(".menu-mobile-mask").click(function () {
  $("body").css("overflow", "visible");
  $(".menu-mobile-mask").removeClass("active");
  $(".menu-mobile").removeClass("active");
});

$(".tab").click(function () {
  $(".tab").removeClass("active");
  $(this).addClass("active");
});
