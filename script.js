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
window.onload = function() {
  var videos = document.querySelectorAll("#video-container video");
  var currentVideoIndex = 0;

  function playNextVideo() {
    var currentVideo = videos[currentVideoIndex];
    var nextVideoIndex = (currentVideoIndex + 1) % videos.length;
    var nextVideo = videos[nextVideoIndex];

    currentVideo.style.opacity = 0;
    nextVideo.style.opacity = 1;

    currentVideoIndex = nextVideoIndex;
  }

  setInterval(playNextVideo, 5000); // Troca de vídeo a cada 5 segundos (5000 milissegundos)
};
window.onload = function() {
  var photos = document.querySelectorAll("#photo-container img");
  var currentPhotoIndex = 0;

  function showNextPhoto() {
    var currentPhoto = photos[currentPhotoIndex];
    var nextPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    var nextPhoto = photos[nextPhotoIndex];

    currentPhoto.style.opacity = 0;
    nextPhoto.style.opacity = 1;

    currentPhotoIndex = nextPhotoIndex;
  }

  setInterval(showNextPhoto, 5000); // Troca de foto a cada 5 segundos (5000 milissegundos)
};
