let stars = document.querySelectorAll(".star");
let count = document.querySelector(".rating-count");
let click = 0;
stars.forEach((star) => {
  star.addEventListener("mouseenter", (e) => {
    let hovered = e.target.getAttribute("data-star");
    stars.forEach((star, index) => {
      if (index + 1 <= hovered) {
        star.style.color = "yellow";
      } else star.style.color = "grey";
    });
  });
  star.addEventListener("mouseleave", (e) => {
    stars.forEach((star, index) => {
      star.style.color = index + 1 > click ? "grey" : "yellow";
    });
  });
  star.addEventListener("click", (e) => {
    let clicked = e.target.getAttribute("data-star");
    click = clicked;
    stars.forEach((star, index) => {
      star.style.color = index + 1 <= clicked ? "yellow" : "grey";
    });
    count.innerHTML = `Rating count - ${e.target.getAttribute("data-star")}`;
  });
});
