<script>
  let currentIndex = 0;
  const gallery = document.getElementById("gallery");
  const totalImages = gallery.children.length;

  function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    updateGallery();
    resetTimer();
  }

  function updateGallery() {
    gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Auto-Slide alle 4 Sekunden
  let autoSlide = setInterval(() => {
    moveSlide(1);
  }, 4000);

  function resetTimer() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
      moveSlide(1);
    }, 4000);
  }
</script>