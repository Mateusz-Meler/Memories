import "../scss/main.scss";

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

const cardColors = [
  "yellow",
  "blue",
  "violet",
  "blueviolet",
  "green",
  "lightsalmon",
  "orange",
  "lightgreen",
  "brown",
  "lightblue",
  "yellow",
  "blue",
  "violet",
  "blueviolet",
  "green",
  "lightsalmon",
  "orange",
  "lightgreen",
  "brown",
  "lightblue",
];

let cards = document.querySelectorAll("div");
cards = [...cards];

const startTime = new Date().getTime();

let activeCard = "";

const activeCards = [];

const gamePairs = cards.length / 2;

let gameResult = 0;

const clickCard = function () {
  activeCard = this;
  if (activeCard == activeCards[0]) return;
  activeCard.classList.remove("hidden");

  if (activeCards.length === 0) {
    activeCards[0] = activeCard;
    return;
  }
  else {
    cards.forEach(card => card.removeEventListener("click", clickCard));
    activeCards[1] = activeCard;

    setTimeout(() => {
            if (activeCards[0].className === activeCards[1].className) {
                activeCards.forEach(card => card.classList.add("off"));

                gameResult++;
                cards = cards.filter(card => !card.classList.contains("off"));

                if (gameResult == gamePairs) {
                    const endTime = new Date().getTime();

                    const gameTime = (endTime - startTime) / 1000;

                    alert(`Udało się ! Twój czas to: ${gameTime} sekund 😎`);

                    location.reload();
                }
            }
            else {
                activeCards.forEach(card => card.classList.add("hidden"));
            }
            activeCard = "";
            activeCards.length = 0;
            cards.forEach(card => card.addEventListener("click", clickCard));
        }, 500);
  }
};

const init = () => {
  cards.forEach(card => {
    const position = Math.floor(Math.random() * cardColors.length);
    card.classList.add(cardColors[position]);
    cardColors.splice(position, 1);
  });
  setTimeout(() => {
          cards.forEach((card) => {
              card.classList.add("hidden");
              card.addEventListener("click", clickCard);
          });
      }, 2000);
};

init();
