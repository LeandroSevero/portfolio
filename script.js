window.onload = function() {
  var imagem = document.getElementById("imagem");
  var headerHeight = document.getElementById("header").offsetHeight;
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight - headerHeight;
  
  function moverImagem() {
    var novoLeft = windowWidth - imagem.offsetWidth;
    var novoTop = headerHeight + Math.floor(Math.random() * windowHeight);
    
    imagem.style.transform = "translate(" + novoLeft + "px, " + novoTop + "px)";
  }
  
  // Mover a imagem imediatamente ao carregar o site
  moverImagem();
  
  setInterval(moverImagem, 5000); // Move a imagem a cada 5 segundos (5000 milissegundos)
};
