/*

document.addEventListener("DOMContentLoaded", function () {
  const preBtn = document.querySelector(".slider-pre-btn");
  const nextBtn = document.querySelector(".slider-next-btn");
  const cards = document.querySelector(".slider-cards");
  const wrap = document.querySelector(".blog-slider-wrap");
  const card = document.querySelector(".slider-card");

  if (!preBtn || !nextBtn || !cards || !wrap || !card) {
    console.error("缺少必要的 DOM 元素");
    return;
  }

  let currentPosition = 0;
  const cardWidth = card.offsetWidth + 24;
  // offsetWidth計算某div的寬度(包括width, padding, border，除了margin)
  // 416 + 24 = 440px
  const maxPosition = -(cardWidth * cards.children.length - 1320);

  preBtn.addEventListener("click", function () {
    currentPosition += cardWidth;
    if (currentPosition > 0) currentPosition = 0;
    cards.style.transform = `translateX(${currentPosition}px)`;
    cards.style.transition = "transform 0.3s ease";
  });

  nextBtn.addEventListener("click", function () {
    currentPosition -= cardWidth;
    if (currentPosition < maxPosition) currentPosition = maxPosition;
    cards.style.transform = `translateX(${currentPosition}px)`;
    cards.style.transition = "transform 0.3s ease";
  });
});


*/
