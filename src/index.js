import "./js/common";
import "./scss/main.scss";
import "./css/main.css";

if ($(window).width() < 992) {
  $(".swiper-wrapper").removeClass("gallery__slider");
  const swiper = new Swiper(".swiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
  });
}
