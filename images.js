const abrirMapaBtn = document.getElementById("abrirMapa");
const fecharMapaBtn = document.getElementById("fecharMapa");
const mapModal = document.getElementById("mapModal");

abrirMapaBtn.addEventListener("click", () => {
  mapModal.style.display = "block";
});

fecharMapaBtn.addEventListener("click", () => {
  mapModal.style.display = "none";
});