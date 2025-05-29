// Faz a página rolar suavemente até uma seção com o ID indicado
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
