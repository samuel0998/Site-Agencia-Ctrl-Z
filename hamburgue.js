const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.header-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');

  // Esconde o ícone do hamburguer quando a lista de navegação estiver ativa
  if (navMenu.classList.contains('active')) {
    hamburger.style.display = 'none';
  } else {
    hamburger.style.display = 'block';
  }
});