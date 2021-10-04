function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var numeroTentativas = 3;
var buttonChutar = document.getElementById("buttonChutar");
var buttonTentativa = document.getElementById("buttonTentativa");
buttonTentativa.disabled = true;
var elemento = document.getElementById("resultado");
var randomNumber = getRandomInt(0, 10);

function ReiniciarTentativas() {
  buttonChutar.disabled = false;
  buttonTentativa.disabled = true;
}

function ReiniciarChute() {
  buttonChutar.disabled = true;
  buttonTentativa.disabled = false;
}

function tentativa() {
  numeroTentativas = 3;
  document.getElementById("tentativas").innerHTML =
    "Número de tentativa: " + numeroTentativas;
  ReiniciarTentativas();
  elemento.innerHTML = "";
  document.getElementById("chute").innerHTML = "";
  randomNumber = getRandomInt(0, 10);
}

function chutar(valor) {
  if (numeroTentativas > 1) {
    if (valor < 0 || valor > 10 || valor === "") {
      elemento.innerHTML = "Digite um número entre 0 e 10";
      elemento.style.color = "#ffffff";
      document.getElementById("chute").innerHTML = "";
    } else {
      if (randomNumber === parseInt(valor)) {
        elemento.innerHTML = "Acertou";
        elemento.style.color = "#00ff00";
        document.getElementById("chute").innerHTML =
          "Número sorteado era: " + randomNumber;
        randomNumber = getRandomInt(0, 10);
        ReiniciarChute();
      } else {
        elemento.innerHTML = "Errou";
        elemento.style.color = "#ff0000";
        numeroTentativas -= 1;
      }
    }
  } else {
    if (randomNumber === parseInt(valor)) {
      elemento.innerHTML = "Acertou";
      elemento.style.color = "#00ff00";
    } else {
      elemento.innerHTML = "Errou";
      elemento.style.color = "#ff0000";
    }
    ReiniciarChute();
    document.getElementById("chute").innerHTML =
      "Número sorteado era: " + randomNumber;
    randomNumber = getRandomInt(0, 10);
  }
  document.getElementById("tentativas").innerHTML =
    "Número de tentativa: " + numeroTentativas;
}
