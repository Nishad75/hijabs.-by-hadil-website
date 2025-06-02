document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = [
    "/assets/images/background.png",
    "/assets/images/section-1bg.jpg",
    "/assets/images/background.png",
    "/assets/images/section-1bg.jpg",
    "/assets/images/background.png",
    "/assets/images/section-1bg.jpg",
    "/assets/images/background.png",
    "/assets/images/section-1bg.jpg",
    "/assets/images/background.png",
    "/assets/images/section-1bg.jpg",
    "/assets/images/background.png",
    "/assets/images/section-1bg.jpg",
    "/assets/images/background.png",
    "/assets/images/section-1bg.jpg",
    "/assets/images/background.png",
    "/assets/images/section-1bg.jpg",
    "/assets/images/background.png",
    "/assets/images/section-1bg.jpg",
    "/assets/images/background.png",
    "/assets/images/section-1bg.jpg",
    "/assets/images/background.png",
    "/assets/images/section-1bg.jpg",
    "/assets/images/background.png",
    "/assets/images/section-1bg.jpg",
    "/assets/images/background.png",
    "/assets/images/section-1bg.jpg",
  ];

  const galleryContainer = document.getElementById("gallery-container");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("closeBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  // Create image elements
  galleryImages.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Gallery Image";
    img.dataset.index = index;

    img.addEventListener("click", () => {
      currentIndex = index;
      openLightbox();
    });

    galleryContainer.appendChild(img);
  });

  function openLightbox() {
    lightbox.style.display = "flex";
    lightboxImg.src = galleryImages[currentIndex];
  }

  function closeLightbox() {
    lightbox.style.display = "none";
  }

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  function showPrev() {
    currentIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    openLightbox();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    openLightbox();
  }

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", showPrev);
  nextBtn.addEventListener("click", showNext);

  // Close lightbox on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });
});
