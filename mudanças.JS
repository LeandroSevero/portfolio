window.onload = function() {
  var letter = document.getElementById("letter");
  
  function moveLetter() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var newLeft = Math.floor(Math.random() * (windowWidth - letter.offsetWidth));
    var newTop = Math.floor(Math.random() * (windowHeight - letter.offsetHeight));
    var colors = ["red", "green", "blue", "yellow", "orange", "purple"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    letter.style.left = newLeft + "px";
    letter.style.top = newTop + "px";
    letter.style.color = randomColor;
  }
  
  setInterval(moveLetter, 2000); // Muda a posição e a cor a cada 2 segundos (2000 milissegundos)
};
