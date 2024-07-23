
const input = document.querySelector('.search-bar input[type="search"]');
const phrases = [
  "Manutenção de Site Gratuita",
  "Artes de Anúncios Gratuitas",
  "Domínio e Hospedagem Gratuitos",
  "Análise de Tráfego",
  "Acesso Gratuito a Projetos"
];
let currentPhraseIndex = 0;

function animatePlaceholder() {
  input.placeholder = phrases[currentPhraseIndex];
  currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
}

document.addEventListener("DOMContentLoaded", function() {
  setInterval(animatePlaceholder, 2000); // troca o texto do placeholder a cada 2 segundos
});