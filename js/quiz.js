const quiz = [
  {
    pergunta: "A reciclagem ajuda a reduzir a quantidade de resíduos que vão para os aterros sanitários.",
    respostas: ["Verdadeiro", "Falso"],
    correta: 0
  },
  {
    pergunta: "O uso excessivo de plástico não tem impacto significativo no meio ambiente.",
    respostas: ["Verdadeiro", "Falso"],
    correta: 1
  },
  {
    pergunta: "Qual das opções abaixo é uma fonte de energia renovável?",
    respostas: ["Carvão", "Petróleo", "Energia solar", "Gás natural", "Nuclear"],
    correta: 2
  },
  {
    pergunta: "O que significa o conceito de “pegada de carbono”?",
    respostas: [
      "A quantidade de água usada para produzir um produto",
      "A quantidade de gases de efeito estufa emitidos direta ou indiretamente por uma pessoa, empresa ou produto",
      "A área de floresta destruída para agricultura",
      "O consumo de energia elétrica residencial",
      "A quantidade de lixo reciclado por ano"
    ],
    correta: 1
  },
  {
    pergunta: "Qual das práticas abaixo contribui para a sustentabilidade ambiental?",
    respostas: [
      "Desmatamento para expansão agrícola",
      "Uso de veículos movidos a combustíveis fósseis",
      "Conservação da biodiversidade",
      "Queima de lixo a céu aberto",
      "Uso excessivo de água potável para irrigação"
    ],
    correta: 2
  }
];

let indexAtual = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");

function carregarPergunta() {
  const q = quiz[indexAtual];
  questionEl.textContent = q.pergunta;
  answersEl.innerHTML = "";

  q.respostas.forEach((resposta, i) => {
    const btn = document.createElement("button");
    btn.textContent = resposta;
    btn.className = "resposta-btn";
    btn.onclick = () => verificarResposta(i);
    answersEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function verificarResposta(escolha) {
  const correta = quiz[indexAtual].correta;
  const botoes = document.querySelectorAll(".resposta-btn");

  botoes.forEach((btn, i) => {
    if (i === correta) btn.style.backgroundColor = "green";
    else if (i === escolha) btn.style.backgroundColor = "red";
    btn.disabled = true;
  });

  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  indexAtual++;
  if (indexAtual < quiz.length) {
    carregarPergunta();
  } else {
    questionEl.textContent = "Fim do quiz!";
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
};

carregarPergunta();