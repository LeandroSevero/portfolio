
  var videos = document.querySelectorAll("#video-container video");
  var currentVideoIndex = 0;

  function playNextVideo() {
    var currentVideo = videos[currentVideoIndex];
    var nextVideoIndex = (currentVideoIndex + 1) % videos.length;
    var nextVideo = videos[nextVideoIndex];

    currentVideo.style.opacity = 0;
    currentVideo.pause();

    nextVideo.style.opacity = 1;
    nextVideo.play();

    currentVideoIndex = nextVideoIndex;
  }

  // Exibir o primeiro vídeo imediatamente ao carregar o site
  videos[currentVideoIndex].addEventListener("loadeddata", function() {
    videos[currentVideoIndex].style.opacity = 1;
    videos[currentVideoIndex].play();
  });

  setInterval(playNextVideo, 5000); // Troca de vídeo a cada 5 segundos (5000 milissegundos)

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
  
  // Exibir a primeira foto imediatamente ao carregar o site
  showNextPhoto();

  setInterval(showNextPhoto, 5000); // Troca de foto a cada 5 segundos (5000 milissegundos)

