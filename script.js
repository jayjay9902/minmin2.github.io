const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const responseMessage = document.getElementById("responseMessage");

let currentGifIndex = 0;

noBtn.addEventListener("click", () => {
  currentGifIndex = (currentGifIndex % 5) + 1; // Cycle through 1, 2, 3, 4
  gif.src = `img/tonton-${currentGifIndex}.gif`;

  switch (currentGifIndex) {
    case 1:
      question.textContent = "Ihhhh";
      break;
    case 2:
      question.textContent = "n";
      break;
    case 3:
      question.textContent = "i";
      break;
    case 4:
      question.textContent = "l";
      break;
    case 5:
      question.textContent = "p";
    default:
      break;
  }

  if (currentGifIndex === 5) {
    triggerMouseover();
  }
});

function triggerMouseover() {
  noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});}

yesBtn.addEventListener("click", () => {
  question.innerHTML = "i";

  gif.src = "img/tonton-yes.gif";
  responseMessage.classList.remove("hidden");
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});
