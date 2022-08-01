const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const heart = document.querySelector(".heart");
const target = document.querySelector(".target");

document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  horizontal.style.top = `${y}px`;
  vertical.style.left = `${x}px`;
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  target.innerHTML = `${x}px, ${y}px`;
});
