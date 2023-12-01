/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //Funcion Generador de Iconos Para la parte de Arriba
  let CardIcons = ["♦", "♠", "♥", "♣"];
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
        document.querySelector("#number").style.color = "red";
      } else {
        document.querySelector("#randomIcon1").style.color = "black";
        document.querySelector("#randomIcon2").style.color = "black";
        document.querySelector("#number").style.color = "black";
      }
    }

    randomCard();

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

//Ahora voy a crear inputs para que puedas elegir el tamaño de la carta si lo quieres grnde ,pequeño o mediano.

function chooseSize() {
  let sizeSelector = document.querySelector("#sizeSelector");
  let laCarta = document.querySelector("#laCarta");

  sizeSelector.addEventListener("change", function() {
    let sizeOption = sizeSelector.value;

    switch (sizeOption) {
      case "small":
        laCarta.style.width = "160px";
        laCarta.style.height = "230px";
        laCarta.style.fontSize = "50px";
        break;
      case "medium":
        laCarta.style.width = "350px";
        laCarta.style.height = "450px";
        laCarta.style.fontSize = "100px";
        break;
      case "large":
        laCarta.style.width = "530px";
        laCarta.style.height = "600px";
        laCarta.style.fontSize = "135px";
        break;
      default:
        laCarta.style.width = "350px";
        laCarta.style.height = "450px";
        laCarta.style.fontSize = "100px";
        break;
    }
  });
}

chooseSize();
