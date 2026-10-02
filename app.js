const pet = document.querySelector("#pet");
const hint = document.querySelector("#hint");
const statusText = document.querySelector("#status-text");
const actions = document.querySelectorAll("[data-action]");

const messages = {
  pat: {
    hint: "૮₍ ˃ ⤙ ˂ ₎ა  摸到了。小团子晃了一下。",
    status: "被摸摸了",
  },
  snack: {
    hint: "૮₍ ˃ ⤙ ˂ ₎ა  小团子盯着你手里的零食……",
    status: "期待零食",
  },
  play: {
    hint: "૮₍ ˃ ⤙ ˂ ₎ა  要玩什么？现在还只是第一阶段原型。",
    status: "准备陪玩",
  },
  tap: {
    hint: "૮₍ ˃ ⤙ ˂ ₎ა  看到你了。",
    status: "正在回应",
  },
};

let resetTimer;

function activate(action = "tap") {
  const message = messages[action] ?? messages.tap;

  pet.classList.remove("is-active");
  void pet.offsetWidth;
  pet.classList.add("is-active");

  hint.textContent = message.hint;
  statusText.textContent = message.status;

  clearTimeout(resetTimer);
  resetTimer = window.setTimeout(() => {
    statusText.textContent = "正在待机";
    hint.textContent = "点一下小团子，看看她会不会理你。";
    pet.classList.remove("is-active");
  }, 1800);
}

pet.addEventListener("click", () => activate("tap"));

pet.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    activate("tap");
  }
});

actions.forEach((button) => {
  button.addEventListener("click", () => activate(button.dataset.action));
});
