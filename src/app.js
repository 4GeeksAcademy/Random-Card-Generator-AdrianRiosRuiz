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
    //Esta funcion te da un icono random
    function getRandomCard() {
      return Math.floor(Math.random() * CardIcons.length);
    }
    // esta funcion te prueba a ver si los numeros son pares o no para cambiar el color de los iconos pd:No sabia como hacerlo de otra manera
    function randomCard() {
      let randomIndex = getRandomCard();
      let randomCardIcon = CardIcons[randomIndex];
      let isEven = randomIndex % 2 === 0;

      randomCardIcon =
        document.querySelector("#randomIcon1").innerHTML +
        document.querySelector("#randomIcon2").innerHTML;

      if (isEven) {
        document.querySelector("#randomIcon1").style.color = "red";
        document.querySelector("#randomIcon2").style.color = "red";
        document.querySelector("#number").style.color = "red";
      } else {
        document.querySelector("#randomIcon1").style.color = "black";
        document.querySelector("#randomIcon2").style.color = "black";
        document.querySelector("#number").style.color = "black";
      }
    }

    randomCard();
    //Ahora vamos a crear una funcion que me de de manera random el numero de enmedio o una letra!
    function getRandomNumeroYletra() {
      let numerosYletras = [
        "1",
        "K",
        "2",
        "3",
        "4",
        "5",
        "6",
        "Q",
        "7",
        "8",
        "9",
        "J"
      ];
      let randomNumerosYletrasResult = Math.floor(
        Math.random() * numerosYletras.length
      );
      return numerosYletras[randomNumerosYletrasResult];
    }
    let number = document.querySelector("#number");
    number.innerHTML = getRandomNumeroYletra();
  });
};
