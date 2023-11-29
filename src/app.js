/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //Funcion Generador de Iconos Para la parte de Arriba
  let CardIcons = ["♦", "♥", "♠", "♣"];

  function getRandomCard() {
    return Math.floor(Math.random() * CardIcons.length);
  }

  function randomCard() {
    let randomIndex = getRandomCard();
    let randomCardIcon = CardIcons[randomIndex];
    document.querySelector("#randomIcon1").innerHTML = randomCardIcon;
    document.querySelector("#randomIcon2").innerHTML = randomCardIcon;
  }

  randomCard();
  //Ahora vamos a crear una funcion que me de de manera random el numero de enmedio!
  function getRandomNumber() {
    return Math.ceil(Math.random() * 12);
  }
  let number = document.getElementById("number");
  number.innerHTML = getRandomNumber();
  //Ahora tenemos que cambiar de manera random los colores de los iconos de carta
};
