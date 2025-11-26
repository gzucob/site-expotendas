// Voltar com fallback para home
const backBtn = document.getElementById("btn-voltar");
backBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = backBtn.getAttribute("href") || "/";
  }
});
