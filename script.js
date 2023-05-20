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

  var videos = document.querySelectorAll("#video-container video");
  var photos = document.querySelectorAll("#photo-container img");
  var currentVideoIndex = 0;
  var currentPhotoIndex = 0;

  function playNextVideo() {
    var currentVideo = videos[currentVideoIndex];
    var nextVideoIndex = (currentVideoIndex + 1) % videos.length;
    var nextVideo = videos[nextVideoIndex];

    currentVideo.style.display = "none";
    currentVideo.pause();
    currentVideo.currentTime = 0;

    nextVideo.style.display = "block";
    nextVideo.play();

    currentVideoIndex = nextVideoIndex;
  }

  function showNextPhoto() {
    var currentPhoto = photos[currentPhotoIndex];
    var nextPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    var nextPhoto = photos[nextPhotoIndex];

    currentPhoto.style.display = "none";
    nextPhoto.style.display = "block";

    currentPhotoIndex = nextPhotoIndex;
  }

  // Exibir a primeira foto e reproduzir o primeiro vídeo imediatamente ao carregar o site
  showNextPhoto();
  playNextVideo();

  setInterval(showNextPhoto, 5000); // Troca de foto a cada 5 segundos (5000 milissegundos)
  setInterval(playNextVideo, 10000); // Reproduzir próximo vídeo a cada 10 segundos (10000 milissegundos)
};
