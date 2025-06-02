document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("product-grid");
  const categoryHeading = document.getElementById("category-heading");

  window.products = {
    MalaysianGeorgette: [
      {
        name: "Jet Black Salwar",
        brand: "Bamboo Jersey",
        image:"/assets/images/section-1bg.jpg",
        images: [
          "/assets/images/section-1bg.jpg",
          "/assets/images/background.png",
        ],
        price: "₹299.00",
        oldPrice: "₹419.00",
        badge: "Sale!",
        colors: ["JET BLACK"],
        description: "testing 1",
        specifications: [
          "Material: Bamboo Jersey",
          "Length: 180 cm",
          "Width: 70 cm",
          "Care: Machine wash cold",
        ],
      },
      {
        name: "Jet Black Salwar 2",
        brand: "Bamboo Jersey",
        image: "/assets/images/section-1bg.jpg",
        price: "₹299.00",
        oldPrice: "₹419.00",
        badge: "Sale!",
        colors: ["JET BLACK"],
        description: "testing 2",
        specifications: [
          "Material: Bamboo Jersey",
          "Length: 180 cm",
          "Width: 70 cm",
          "Care: Machine wash cold",
        ],
      },
      {
        name: "Jet Black Salwar 3",
        brand: "Bamboo Jersey",
        image: "/assets/images/section-1bg.jpg",
        price: "₹299.00",
        oldPrice: "₹419.00",
        badge: "Sale!",
        colors: ["JET BLACK"],
        description: "testing 3",
        specifications: [
          "Material: Bamboo Jersey",
          "Length: 180 cm",
          "Width: 70 cm",
          "Care: Machine wash cold",
        ],
      },
      {
        name: "Jet Black Salwar 4",
        brand: "Bamboo Jersey",
        image: "/assets/images/section-1bg.jpg",
        price: "₹299.00",
        oldPrice: "₹419.00",
        badge: "Sale!",
        colors: ["JET BLACK"],
        description: "testing 4",
        specifications: [
          "Material: Bamboo Jersey",
          "Length: 180 cm",
          "Width: 70 cm",
          "Care: Machine wash cold",
        ],
      },
    ],
    softcotton: [
      {
        name: "Luxe Satin Pink",
        brand: "Luxe Satin Hijab",
        image: "/assets/images/section-1bg.jpg",
        price: "₹399.00",
        oldPrice: "₹499.00",
        badge: "Sale!",
        colors: ["PINK", "IVORY", "RED"],
      },
      {
        name: "Luxe Satin Pink",
        brand: "Luxe Satin Hijab",
        image: "/assets/images/section-1bg.jpg",
        price: "₹399.00",
        oldPrice: "₹499.00",
        badge: "Sale!",
        colors: ["PINK", "IVORY", "RED"],
      },
      {
        name: "Luxe Satin Pink",
        brand: "Luxe Satin Hijab",
        image: "/assets/images/section-1bg.jpg",
        price: "₹399.00",
        oldPrice: "₹499.00",
        badge: "Sale!",
        colors: ["PINK", "IVORY", "RED"],
      },
    ],
    CottonCrush: [
      {
        name: "Jet Black Cotton",
        brand: "Cotton Hijab",
        image: "/assets/images/section-1bg.jpg",
        price: "₹259.00",
        oldPrice: "₹299.00",
        badge: "Sale!",
        colors: ["BLACK", "GRAY"],
      },
      {
        name: "Jet Black Cotton",
        brand: "Cotton Hijab",
        image: "/assets/images/section-1bg.jpg",
        price: "₹259.00",
        oldPrice: "₹299.00",
        badge: "Sale!",
        colors: ["BLACK", "GRAY"],
      },
    ],
    ModalCotton: [
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
    ],
    SatinHijab: [
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
    ],
    MojaMalaysianGeorgette: [
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
    ],
    MalaysianHeavyCrincledCotton: [
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
    ],
    OmbereMalaysianGeorgette: [
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
    ],
    SoftCottonStone: [
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
    ],
    CrincledCotton: [
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
    ],
    MunaSatinCrush: [
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
    ],
    mojaBambooJersey: [
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
    ],
    mojaMalaysianCotton: [
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
    ],
    InstantHijabs: [
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
    ],
    MunaSatinCrochet: [
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
    ],
    HijabStylingTape: [
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
    ],
    Georgette: [
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
    ],
    accessories: [
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
      {
        name: "Hijab Pin Set",
        brand: "Accessories",
        image: "/assets/images/section-1bg.jpg",
        price: "₹99.00",
        oldPrice: "₹120.00",
        badge: "Sale!",
        colors: ["Silver", "Gold"],
      },
    ],
  };

  window.categoryNames = {
    MalaysianGeorgette: "Malaysian Georgette",
    softcotton: "Soft Cotton",
    CottonCrush: "Cotton Crush",
    ModalCotton: "Modal Cotton",
    SatinHijab: "Satin Hijab",
    MojaMalaysianGeorgette: "Moja Malaysian georgette",
    MalaysianHeavyCrincledCotton: "Malaysian Heavy Crincled Cotton",
    OmbereMalaysianGeorgette: "Ombere Malaysian Georgette",
    SoftCottonStone: "Soft Cotton Stone",
    CrincledCotton: "Crincled Cotton",
    MunaSatinCrush: "Muna Satin Crush",
    mojaBambooJersey: "Moja Bamboo Jersey",
    mojaMalaysianCotton: "Moja Malaysian Cotton",
    InstantHijabs: "Instant Hijab",
    MunaSatinCrochet: " Muna Satin Crochet",
    HijabStylingTape: "Hijab Styling Tape",
    Georgette: "Georgette",
    accessories: "Accessories",
  };

  const renderProducts = (category) => {
    const items = products[category] || [];
    categoryHeading.textContent = categoryNames[category] || "Products";
    productGrid.innerHTML = items
      .map(
        (product) => `
     <div class="product-card" onclick="window.location.href='productdetail.html?category=${category}&product=${encodeURIComponent(
          product.name
        )}'">

        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" />
          <div class="sale-badge">${product.badge}</div>
        </div>
        <div class="product-brand">${product.brand}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-rating">★★★★★</div>
        <div class="product-price">
          <del>${product.oldPrice}</del> <span>${product.price}</span>
        </div>
        <div class="color-options">
          ${product.colors.map((color) => `<button>${color}</button>`).join("")}
        </div>
      </div>
    `
      )
      .join("");
  };

  window.renderProducts = renderProducts;

  // renderProducts("MalaysianGeorgette"); // Default category

  document.querySelectorAll(".category-list a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = e.target.dataset.category;
      renderProducts(cat);
    });
  });
});
document.querySelectorAll("[data-category]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const cat = e.target.dataset.category;
    renderProducts(cat);
  });
});

function getCategoryFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("category");
}
// document.addEventListener("DOMContentLoaded", () => {
//   const category = getCategoryFromURL();
//   if (category && window.renderProducts) {
//     renderProducts(category);
//   }
// });

// This goes at the top of your script
function getCategoryFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("category"); // returns string like 'modal-cotton'
}

// window.updateHeading = updateHeading;

// Call the render logic once DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const category = getCategoryFromURL();
  if (category) {
    renderProducts(category); // your dynamic grid rendering function
    // updateHeading(category); // if you want to update the category title
  }
});

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

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const productName = params.get("product");

  if (category && productName && window.products) {
    const productList = window.products[category];
    const product = productList.find((p) => p.name === productName);

    if (product) {
      document.getElementById("product-image").src = product.image;
      const mainImage = document.getElementById("product-image");
      const thumbnailsContainer = document.getElementById("thumbnails");

      if (product.images && product.images.length > 0) {
        mainImage.src = product.images[0]; // Show the first image

        // Load all thumbnails
        thumbnailsContainer.innerHTML = product.images
          .map(
            (img, idx) =>
              `<img src="${img}" class="thumbnail" data-index="${idx}" style="width:60px; height:auto; cursor:pointer; margin:5px;" />`
          )
          .join("");

        // Add click event to change main image
        thumbnailsContainer.querySelectorAll("img").forEach((thumb) => {
          thumb.addEventListener("click", (e) => {
            const idx = e.target.dataset.index;
            mainImage.src = product.images[idx];
          });
        });
      } else {
        // fallback if no images array
        mainImage.src = product.image;
      }
      document.getElementById("product-title").textContent = product.name;
      document.getElementById("product-brand").textContent = product.brand;
      document.getElementById(
        "product-price"
      ).innerHTML = `<del>${product.oldPrice}</del> <span>${product.price}</span>`;
      document.getElementById("color-options").innerHTML = product.colors
        .map((c) => `<button>${c}</button>`)
        .join("");

      document.getElementById("product-description").textContent =
        product.description || "No description available.";
      document.getElementById("product-specifications").innerHTML = (
        product.specifications || []
      )
        .map((spec) => `<li>${spec}</li>`)
        .join("");

      // 💡 Important: Call showRelatedProducts only if container exists
      const relatedContainer = document.getElementById("related-products");
      if (relatedContainer) {
        showRelatedProducts(category, productName);
      }
    } else {
      document.body.innerHTML = "<h2>Product not found</h2>";
    }
  }
});

function showRelatedProducts(category, currentProductName) {
  const productList = window.products[category] || [];
  const relatedContainer = document.getElementById("related-products");

  const relatedHTML = productList
    .filter((p) => p.name !== currentProductName) // exclude current product
    .map(
      (p) => `
      <div class="product-card" onclick="window.location.href='productdetail.html?category=${category}&product=${encodeURIComponent(
        p.name
      )}'">
        <div class="product-image">
          <img src="${p.image}" alt="${p.name}" />
          <div class="sale-badge">${p.badge}</div>
        </div>
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">★★★★★</div>
        <div class="product-price">
          <del>${p.oldPrice}</del> <span>${p.price}</span>
        </div>
        <div class="color-options">
          ${p.colors.map((color) => `<button>${color}</button>`).join("")}
        </div>
      </div>
    `
    )
    .join("");

  relatedContainer.innerHTML = relatedHTML;
}
