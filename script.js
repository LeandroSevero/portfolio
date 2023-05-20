window.onload = function() {
  var imagem = document.getElementById("imagem-flutuando-js");
  var containerWidth = document.getElementById("container").offsetWidth;
  var containerHeight = document.getElementById("container").offsetHeight;
  
  function moverImagem() {
    var novoLeft = Math.floor(Math.random() * (containerWidth - imagem.width));
    var novoTop = Math.floor(Math.random() * (containerHeight - imagem.height));
    
    imagem.style.transform = "translate(" + novoLeft + "px, " + novoTop + "px)";
  }
  
  setInterval(moverImagem, 3000); // Move a imagem a cada 3 segundos (3000 milissegundos)
};
