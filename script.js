window.onload = function() {
  var imagem = document.getElementById("imagem");
  var headerHeight = document.getElementById("header").offsetHeight;
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight - headerHeight;
  
  function moverImagem() {
    var novoLeft = windowWidth - imagem.offsetWidth;
    var novoTop = headerHeight + Math.floor(Math.random() * windowHeight);
    
    imagem.style.transition = "none"; // Remover a transição temporariamente
    imagem.style.opacity = 1; // Definir a opacidade como 1
    
    setTimeout(function() {
      imagem.style.transform = "translate(" + novoLeft + "px, " + novoTop + "px)";
      imagem.style.transition = "transform 5s ease-in-out"; // Restaurar a transição
      imagem.style.opacity = 0.5; // Definir a opacidade desejada
    }, 100); // Aguardar 100 milissegundos antes de iniciar a transição
  }
  
  moverImagem(); // Mover a imagem imediatamente ao carregar o site
  
  setInterval(moverImagem, 5000); // Move a imagem a cada 5 segundos (5000 milissegundos)
};
