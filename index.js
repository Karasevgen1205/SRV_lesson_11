"usestrict";

// const modalBtn = document.querySelector(".header__info_btn");
const modalWindow = document.querySelector(".modal-window");
const closeBtn = document.querySelector(".modal-window");
const bannerBtn = document.querySelector(".banner__btn_menu");
// const celebrateBtn = document.querySelector(".order__btn");
const openModalBtn = document.querySelectorAll(".open-modal-btn");

openModalBtn.forEach((item) => {
  item.addEventListener("click", () => {
    modalWindow.classList.add("modal-window__show");
  });
});

closeBtn.addEventListener("click", () => {
  modalWindow.classList.remove("modal-window__show");
});

bannerBtn.addEventListener("click", () => {
  window.location.replace("/#menu");
});
/////////////////////////////////////////////////////
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    header.classList.add("header_white");
  } else {
    header.classList.remove("header_white");
  }
});
///////////////////////////////////////////////////////
const imgBig = document.querySelectorAll(".meals__img-big");
const imgSmall = document.querySelectorAll(".meals__img-small");

imgSmall.forEach((small, index) => {
  small.addEventListener("click", () => {
    imgBig.forEach((big) => {
      big.classList.remove("meals__img-big_active");
    });
    imgBig[index].classList.add("meals__img-big_active");
  });
});
