document.addEventListener("DOMContentLoaded", function () {
  let cartCount = 0;

  function addToCart() {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll("#gallery img");
  const popup = document.getElementById("popupContainer");
  const popupImage = document.getElementById("popupImage");
  const closeBtn = document.getElementById("popupClose");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  function showImage(index) {
    popupImage.src = galleryImages[index].src;
    popup.classList.add("active");
  }

  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      showImage(currentIndex);
    });
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
  });

  prevBtn.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage(currentIndex);
  });

  // Optional: Close on click outside image
  popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.classList.remove("active");
  });

  // Optional: ESC key to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") popup.classList.remove("active");
  });
});
