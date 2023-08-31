// Ao clicar em uma ancora fecha o offcanvasMenu
document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const offcanvasMenu = document.getElementById("offcanvasNavbar")

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      offcanvasMenu.classList.remove("show");
    })
  })
})

document.addEventListener('DOMContentLoaded', function () {
  var contatoTextos = document.querySelectorAll('.contato-texto');

  // Adicionar o ouvinte de clique para cada link de contato
  contatoTextos.forEach(function (contatoTexto) {
    contatoTexto.addEventListener('click', function () {
      var textToCopy = contatoTexto.getAttribute('data-copy');
      copyToClipboard(textToCopy);
      alert('Texto copiado para a área de transferência!');
    });
  });

  // Função para copiar texto para a área de transferência
  function copyToClipboard(text) {
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = text;
    document.body.appendChild(tempTextarea);

    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999);

    document.execCommand('copy');

    document.body.removeChild(tempTextarea);
  }
});