let loginRedirect = document.getElementById("loginRedirect");
let signupRedirect = document.getElementById("signUpRedirect");
let logoutRedirect = document.getElementById("logoutRedirect");

let signUpRedirectBlock = document.getElementById("signUpRedirectBlock");
let loggedUsername = document.getElementById("loggedUsername");
let userNameBlock = document.getElementById("userNameBlock");

let userCart = document.getElementById("userCart");
let userWishlist = document.getElementById("userWishlist");

let userCartDP = document.getElementById("userCartDropdown");
let userWishlistDP = document.getElementById("userWishlistDropdown");
let userOrderDP = document.getElementById("userOrderDropdown");

userCart.addEventListener("click", () => {
  if (localStorage.getItem("isLoggedinUser")) {
    window.location.href = "./pages/cart/cart.html";
  } else {
    alert("Please login first");
  }
});

userWishlist.addEventListener("click", () => {
  if (localStorage.getItem("isLoggedinUser")) {
    window.location.href = "./pages/wishlist/wishlist.html";
  } else {
    alert("Please login first");
  }
});

userCartDP.addEventListener("click", () => {
  if (localStorage.getItem("isLoggedinUser")) {
    window.location.href = "./pages/cart/cart.html";
  } else {
    alert("Please login first");
  }
});

userWishlistDP.addEventListener("click", () => {
  if (localStorage.getItem("isLoggedinUser")) {
    window.location.href = "./pages/wishlist/wishlist.html";
  } else {
    alert("Please login first");
  }
});

userOrderDP.addEventListener("click", () => {
  if (localStorage.getItem("isLoggedinUser")) {
    window.location.href = "./pages/orders/orders.html";
  } else {
    alert("Please login first");
  }
});

if (localStorage.getItem("isLoggedinUser")) {
  let username = JSON.parse(localStorage.getItem("isLoggedinUser"));
  loginRedirect.style.display = "none";
  logoutRedirect.style.display = "block";
  signUpRedirectBlock.style.display = "none";
  userNameBlock.style.display = "block";
  loggedUsername.innerHTML = username.user.name;
}

logoutRedirect.addEventListener("click", () => {
  localStorage.removeItem("isLoggedinUser");
  loginRedirect.style.display = "block";
  logoutRedirect.style.display = "none";
  window.location.href = "./index.html";
});

loginRedirect.addEventListener("click", () => {
  window.location.href = "./pages/login/login.html";
});

let profileBtn = document.getElementById("profileBtn");
let mainDropdown = document.getElementById("nav-main-dropdown");
let MainDropdownflag = true;

function showMainDropdown() {
  if (MainDropdownflag) {
    mainDropdown.style.display = "block";
    MainDropdownflag = false;
  } else {
    mainDropdown.style.display = "none";
    MainDropdownflag = true;
  }
}

profileBtn.addEventListener("click", showMainDropdown);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

signupRedirect.addEventListener("click", () => {
  window.location.href = "./pages/signup/signup.html";
});

function showSection(section) {
  const partnerSection = document.getElementById("partner-section");
  const brandSection = document.getElementById("brand-section");
  const partnerDescription = document.getElementById("partner-description");
  const brandDescription = document.getElementById("brand-description");
  const toggles = document.querySelectorAll(".toggle");

  if (section === "partner") {
    partnerSection.style.display = "flex";
    brandSection.style.display = "none";
    partnerDescription.style.display = "block";
    brandDescription.style.display = "none";
  } else {
    partnerSection.style.display = "none";
    brandSection.style.display = "flex";
    partnerDescription.style.display = "none";
    brandDescription.style.display = "block";
  }

  toggles.forEach((toggle) => {
    if (toggle.innerText.includes(section.toUpperCase())) {
      toggle.classList.add("active");
    } else {
      toggle.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  const joinNowButton = document.querySelector(".cta-button");

  joinNowButton.addEventListener("click", () => {
    alert("Thank you for joining ModeSens Rewards!");
  });
});

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


// arijit code ends

//......................Ashita code starts........................
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".categorySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    412: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

const products = [
  {
    id: 1,
    name: "ULLA JOHNSON",
    description: "Asilia Long Sleeve Maxi Dress In Pristine",
    price: "$39.99",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTjJawpCSJfXqquGws923wOES3pgNyMRBlVUIQ_UndaT46kfj6p21NEBUfrrDM6e0ndHADjBGIEV0HW-oRIQmEjc6HWiLwBQxfElO0DobdU",
  },
  {
    id: 2,
    name: "CINQ A SEPT",
    description: "Cinq A Sept Siv Denim Belted Mini Dress In Indigo",
    price: "$39.99",
    image: "./images/carousel2/product2.jpg",
  },
  {
    id: 3,
    name: "FRAME",
    description: "Danube Denim In Danube Medium Indigo Wash",
    price: "$49.99",
    image: "./images/carousel2/product3.jpg",
  },
  {
    id: 4,
    name: "VERONICA BEARD",
    description: "Magnolia Two-tone Sunburst Knit Midi Dress In Gild",
    price: "$59.99",
    image: "./images/carousel2/product4.jpg",
  },
  {
    id: 5,
    name: "ULLA JOHNSON",
    description: "Frankie Pattern Short Sleeve Crop Sweater In Confetti",
    price: "$69.99",
    image: "./images/carousel2/product5.jpg",
  },
  {
    id: 6,
    name: "ACNE STUDIOS",
    description: "Logo Printed Crewneck Pattern T Shirt In Pink",
    price: "$79.99",
    image: "./images/carousel2/product6.jpg",
  },
];

let productsDisplayed = 3;

function renderProducts() {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  for (let i = 0; i < productsDisplayed; i++) {
    if (i >= products.length) break;

    const product = products[i];
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const originalPrice = parseFloat(product.price.replace("$", "")) * 1.25;
    const originalPriceFormatted = `$${originalPrice.toFixed(2)}`;

    productCard.innerHTML = `
          <div class="image-box">
              <img src="${product.image}" alt="${product.name}">
          </div>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p class="price">
              <span style="text-decoration: line-through;color:red;">${originalPriceFormatted}</span>
              ${product.price}
          </p>
          <button>Add to Cart</button>
      `;

    productCard.addEventListener("click", () => {
      navigateToProductDescription(product.id);
    });

    productContainer.appendChild(productCard);
  }
}

function navigateToProductDescription(productId) {
  window.location.href = `./pages/all product/allproduct.html`;
}

document.getElementById("viewBtn").addEventListener("click", () => {
  productsDisplayed += 4;
  renderProducts();

  if (productsDisplayed >= products.length) {
    document.getElementById("viewBtn").style.display = "none";
  }
});

renderProducts();

//........................Ashita code ends....................

// ------------Created by vikram starts--------------

const children = document.querySelectorAll(".five-itrate-product-category");
const containerOfFiveProductCategoryTheirCon = document.getElementsByClassName(
  "container-of-five-product-category-their-con"
);
const fiveItrateProductCategoryTheirCat = document.querySelectorAll(
  ".five-itrate-product-category-their_cat"
);
let currentlyScaled = document.querySelector(
  ".five-itrate-product-category.scaled"
);
const womenCheckbox = document.getElementById("women");
const menCheckbox = document.getElementById("men");

if (!currentlyScaled) {
  children[0].classList.add("scaled");
  currentlyScaled = children[0];
  containerOfFiveProductCategoryTheirCon.innerHTML = "";
  fiveItrateProductCategoryTheirCat[0].style.display = "block";
}

children.forEach((child, index) => {
  child.addEventListener("mouseover", () => {
    if (currentlyScaled !== child) {
      currentlyScaled.classList.remove("scaled");

      const currentIndex = Array.from(children).indexOf(currentlyScaled);
      fiveItrateProductCategoryTheirCat[currentIndex].style.display = "none";

      child.classList.add("scaled");
      fiveItrateProductCategoryTheirCat[index].style.display = "block";
      currentlyScaled = child;
    }
  });
});

womenCheckbox.addEventListener("change", function () {
  if (this.checked) {
    menCheckbox.checked = false;
  }
});

menCheckbox.addEventListener("change", function () {
  if (this.checked) {
    womenCheckbox.checked = false;
  }
});

// ------------Created by vikram ends--------------
