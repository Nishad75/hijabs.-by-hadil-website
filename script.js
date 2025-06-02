function getCategoryFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("category");
}
document.addEventListener("DOMContentLoaded", () => {
  const category = getCategoryFromURL();
  if (category && window.renderProducts) {
    renderProducts(category);
  }
});


// This goes at the top of your script
function getCategoryFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("category"); // returns string like 'modal-cotton'
}

// Call the render logic once DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const category = getCategoryFromURL();
  if (category) {
    renderProducts(category); // your dynamic grid rendering function
    updateHeading(category); // if you want to update the category title
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const addToCartBtn = document.getElementById("add-to-cart-btn");

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      const params = new URLSearchParams(window.location.search);
      const category = params.get("category");
      const productName = params.get("product");

      if (!category || !productName) return;

      const productList = window.products[category] || [];
      const product = productList.find((p) => p.name === productName);

      if (!product) return;

      // Get quantity
      const quantity = parseInt(document.getElementById("quantity").value) || 1;

      // Prepare cart item
      const cartItem = {
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
      };

      // Get existing cart from localStorage
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Check if item already exists
      const existing = cart.find((item) => item.name === cartItem.name);
      if (existing) {
        existing.quantity += quantity;
      } else {
        cart.push(cartItem);
      }

      // Save back to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      // Update cart count
      updateCartCount();
      // alert("Added to cart!");
    });
  }

  updateCartCount(); // Call when page loads
});

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").textContent = totalCount;
}


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

document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const isOpen = question.classList.contains("active");

      // Close all
      questions.forEach((q) => {
        q.classList.remove("active");
        q.nextElementSibling.style.maxHeight = null;
      });

      // Toggle current
      if (!isOpen) {
        question.classList.add("active");
        const answer = question.nextElementSibling;
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
