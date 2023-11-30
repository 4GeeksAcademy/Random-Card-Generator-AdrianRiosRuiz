/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //Funcion Generador de Iconos Para la parte de Arriba
  let CardIcons = ["♦", "♥", "♠", "♣"];
  //Con este evento lo que hare sera llamar a toda la funcion cuando el boton sea clickado
  document.querySelector("#boton").addEventListener("click", function() {
    function getRandomCard() {
      return Math.floor(Math.random() * CardIcons.length);
    }

    function randomCard() {
      let randomIndex = getRandomCard();
      let randomCardIcon = CardIcons[randomIndex];
      let isEven = randomIndex % 2 === 0;

      document.querySelector("#randomIcon1").innerHTML = randomCardIcon;
      document.querySelector("#randomIcon2").innerHTML = randomCardIcon;

      if (isEven) {
        document.querySelector("#randomIcon1").style.color = "red";
        document.querySelector("#randomIcon2").style.color = "red";
      } else {
        document.querySelector("#randomIcon1").style.color = "black";
        document.querySelector("#randomIcon2").style.color = "black";
      }
    }

    randomCard();
    //Ahora vamos a crear una funcion que me de de manera random el numero de enmedio!
    function getRandomNumber() {
      return Math.floor(Math.random() * 12);
    }
    let number = document.getElementById("number");
    number.innerHTML = getRandomNumber();
    //Ahora tenemos que cambiar de manera random los colores de los iconos de carta
  });
};
