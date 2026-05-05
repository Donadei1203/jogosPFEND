let palavra = "";
let tracos = [];
let tentadas = [];
let tentativas = 5;

function enviar() {
  palavra = document.getElementById("inputPalavra").value.trim().toLowerCase();
  const dica = document.getElementById("inputDica").value.trim();

  if (!palavra || !dica) {
    alert("Preencha os dois campos!");
    return;
  }

  tracos = Array(palavra.length).fill("_");

  document.getElementById("dica").textContent = "Dica: " + dica;
  document.getElementById("tracos").textContent = tracos.join(" ");
  document.getElementById("tentativas").textContent =
    "Tentativas: " + tentativas;

  document.getElementById("telaP1").style.display = "none";
  document.getElementById("telaP2").style.display = "block";
}

function chutar() {
  const entrada = prompt("Digite uma letra:");
  if (!entrada) return;
  const letra = entrada.trim().toLowerCase();

  if (letra.length !== 1) {
    alert("Digite apenas uma letra!");
    return;
  }
  if (tentadas.includes(letra)) {
    alert("Letra ja tentada!");
    return;
  }

  tentadas.push(letra);
  document.getElementById("letras").textContent =
    "Letras tentadas: " + tentadas.join(", ").toUpperCase();

  if (palavra.includes(letra)) {
    for (let i = 0; i < palavra.length; i++) {
      if (palavra[i] === letra) tracos[i] = letra.toUpperCase();
    }
    document.getElementById("tracos").textContent = tracos.join(" ");

    if (!tracos.includes("_")) {
      document.getElementById("mensagem").textContent =
        "Parabens! Voce acertou!";
      document.getElementById("mensagem").className = "vitoria";
      encerrar();
    }
  } else {
    tentativas--;
    document.getElementById("tentativas").textContent =
      "Tentativas: " + tentativas;

    if (tentativas === 0) {
      document.getElementById("mensagem").textContent =
        "Fim de jogo! A palavra era: " + palavra.toUpperCase();
      document.getElementById("mensagem").className = "derrota";
      encerrar();
    }
  }
}

function encerrar() {
  document.getElementById("btnChutar").style.display = "none";
  document.getElementById("btnReiniciar").style.display = "inline-block";
}

function reiniciar() {
  palavra = "";
  tracos = [];
  tentadas = [];
  tentativas = 5;
  document.getElementById("inputPalavra").value = "";
  document.getElementById("inputDica").value = "";
  document.getElementById("mensagem").textContent = "";
  document.getElementById("mensagem").className = "";
  document.getElementById("letras").textContent = "Letras tentadas: -";
  document.getElementById("btnChutar").style.display = "inline-block";
  document.getElementById("btnReiniciar").style.display = "none";
  document.getElementById("telaP1").style.display = "block";
  document.getElementById("telaP2").style.display = "none";
}
