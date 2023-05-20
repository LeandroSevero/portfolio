window.onload = function() {
  var imagem = document.getElementById("imagem");
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  
  function moverImagem() {
    var novoLeft = Math.floor(Math.random() * windowWidth);
    var novoTop = Math.floor(Math.random() * windowHeight);
    
    imagem.style.transform = "translate(" + novoLeft + "px, " + novoTop + "px)";
  }
  
  setInterval(moverImagem, 1000); // Move a imagem a cada 5 segundos (5000 milissegundos)
};
