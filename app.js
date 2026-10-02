const tuanzi = document.querySelector("#tuanzi");
const hint = document.querySelector("#hint");

function greet() {
  tuanzi.classList.remove("is-happy");
  void tuanzi.offsetWidth;
  tuanzi.classList.add("is-happy");
  hint.textContent = "૮₍ ˃ ⤙ ˂ ₎ა  小团子收到啦！";
}

tuanzi.addEventListener("click", greet);

tuanzi.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    greet();
  }
});
