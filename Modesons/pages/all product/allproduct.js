let kidurl = "https://traveling-ubiquitous-study.glitch.me/kidsproducts";
let beautyurl = "https://traveling-ubiquitous-study.glitch.me/beautyproducts";
let homeurl = "https://traveling-ubiquitous-study.glitch.me/homeproducts";
let menurl = "https://traveling-ubiquitous-study.glitch.me/menproducts";
let womenurl = "https://traveling-ubiquitous-study.glitch.me/womenproducts";
let categoryWiseProduct = document.getElementById("categoryWiseProduct");
let filterTheDataByPrice = document.getElementById("filterTheDataByPrice");

let allProductArr = [kidurl, menurl, womenurl, homeurl, beautyurl];



let userCart = document.getElementById("userCart");
let userWishlist = document.getElementById("userWishlist");

userCart.addEventListener("click", () => {
  if (localStorage.getItem('isLoggedinUser')) {
    window.location.href = "../cart/cart.html";
  } else {
    alert("Please login first");
  }
});

userWishlist.addEventListener("click", () => {
  if (localStorage.getItem('isLoggedinUser')) {
    window.location.href = "../wishlist/wishlist.html";
  } else {
    alert("Please login first");
  }
});

let loginRedirect = document.getElementById("loginRedirect");
let logoutRedirect = document.getElementById("logoutRedirect");
let loggedUsername = document.getElementById("loggedUsername");

if (localStorage.getItem('isLoggedinUser')) {
  let username = JSON.parse(localStorage.getItem('isLoggedinUser'));
  loginRedirect.style.display = "none";
  logoutRedirect.style.display = "block";
}

logoutRedirect.addEventListener("click", () => {
  localStorage.removeItem('isLoggedinUser');
  loginRedirect.style.display = "block";
  logoutRedirect.style.display = "none";
  window.location.href = "../../index.html";
});






let productsContainer = document.getElementById("allProduct-container");
const ShowData = (data) => {
  data.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.style.cursor = "pointer";

    productElement.addEventListener("click", () => {
      window.location.href = `../productDescriptionPage/productDescriptionPage.html`;

      if (!localStorage.getItem("singleProduct")) {
        localStorage.removeItem("singleProduct");
        localStorage.setItem("singleProduct", JSON.stringify(product));
      } else {
        localStorage.setItem("singleProduct", JSON.stringify(product));
      }
    });

    const productImage = document.createElement("div");
    productImage.className = "product-image";
    const productDetails = document.createElement("div");
    productDetails.className = "product-details";

    const productTitle = document.createElement("h2");
    productTitle.textContent = product.title;
    const productDesc = document.createElement("p");
    productDesc.textContent = product.desc;
    const productPrice = document.createElement("span");
    productPrice.textContent = `${product.price}`;
    const productOldPrice = document.createElement("span");
    productOldPrice.textContent = `${product.oldprice}`;

    let oldPrice = product.oldprice.replace(/₹|,/g, "").trim();
    let newPrice = product.price.replace(/₹|,/g, "").trim();
    let oldPriceNumber = Number(oldPrice);
    let newPriceNumber = Number(newPrice);
    let discountPercentage = Math.abs(
      Math.round(((oldPriceNumber - newPriceNumber) / newPriceNumber) * 100)
    );

    const productDiscount = document.createElement("span");
    productDiscount.textContent = `${discountPercentage}% off`;

    const productImageElement = document.createElement("img");
    productImageElement.src = product.Imagelink;

    productImage.appendChild(productImageElement);
    productDetails.append(
      productTitle,
      productDesc,
      productPrice,
      productOldPrice,
      productDiscount
    );

    productElement.append(productImage, productDetails);

    productsContainer.append(productElement);
  });
};
const ShowSearchData = (data) => {
  productsContainer.innerHTML = "";
  data.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.style.cursor = "pointer";

    productElement.addEventListener("click", () => {
      window.location.href = `../productDescriptionPage/productDescriptionPage.html`;

      if (!localStorage.getItem("singleProduct")) {
        localStorage.removeItem("singleProduct");
        localStorage.setItem("singleProduct", JSON.stringify(product));
      } else {
        localStorage.setItem("singleProduct", JSON.stringify(product));
      }
    });

    const productImage = document.createElement("div");
    productImage.className = "product-image";
    const productDetails = document.createElement("div");
    productDetails.className = "product-details";

    const productTitle = document.createElement("h2");
    productTitle.textContent = product.title;
    const productDesc = document.createElement("p");
    productDesc.textContent = product.desc;
    const productPrice = document.createElement("span");
    productPrice.textContent = `${product.price}`;
    const productOldPrice = document.createElement("span");
    productOldPrice.textContent = `${product.oldprice}`;

    let oldPrice = product.oldprice.replace(/₹|,/g, "").trim();
    let newPrice = product.price.replace(/₹|,/g, "").trim();
    let oldPriceNumber = Number(oldPrice);
    let newPriceNumber = Number(newPrice);
    let discountPercentage = Math.abs(
      Math.round(((oldPriceNumber - newPriceNumber) / newPriceNumber) * 100)
    );
    const productDiscount = document.createElement("span");
    productDiscount.textContent = `${discountPercentage}% off`;

    const productImageElement = document.createElement("img");
    productImageElement.src = product.Imagelink;

    productImage.appendChild(productImageElement);
    productDetails.append(
      productTitle,
      productDesc,
      productPrice,
      productOldPrice,
      productDiscount
    );

    productElement.append(productImage, productDetails);

    productsContainer.append(productElement);
  });
};

let searchData = [];
let StoreDataforSearch = async (URL) => {
  let data = await fetchData(URL);
  data.forEach((ele) => {
    searchData.push(ele);
  });
};

let fetchData = async (URL) => {
  let res = await fetch(URL);
  let data = await res.json();
  return data;
};

let fetchAllData = async () => {
  let promises = allProductArr.map((url) => StoreDataforSearch(url));
  await Promise.all(promises);
  ShowData(searchData);
};

let productSearch = document.getElementById("productSearch");

function debounce(func, delay) {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

let handleSearchInput = (searchData, value) => {
  if (value == "menproducts") {
    let ndata = searchData.filter((ele) => {
      return ele.category.toLowerCase() == value.toLowerCase();
    });
    ShowSearchData(ndata);
  } else {
    let ndata = searchData.filter((ele) => {
      return (
        ele.title.toLowerCase().includes(value.toLowerCase()) ||
        ele.id.includes(value) ||
        ele.category.toLowerCase().includes(value.toLowerCase()) ||
        ele.desc.toLowerCase().includes(value.toLowerCase())
      );
    });
    ShowSearchData(ndata);
  }
};

let handleSearchFilter = (searchData, value) => {
  if (value == "") {
    ShowSearchData(searchData);
  } else if (value == "high-to-low") {
    let ndata = searchData.sort((a, b) => {
      return (
        b.price.replace(/₹|,/g, "").trim() - a.price.replace(/₹|,/g, "").trim()
      );
    });
    ShowSearchData(ndata);
  } else {
    let ndata = searchData.sort((a, b) => {
      return (
        a.price.replace(/₹|,/g, "").trim() - b.price.replace(/₹|,/g, "").trim()
      );
    });
    ShowSearchData(ndata);
  }
};

categoryWiseProduct.addEventListener("change", () => {
  handleSearchInput(searchData, categoryWiseProduct.value);
});

filterTheDataByPrice.addEventListener("change", () => {
  handleSearchFilter(searchData, filterTheDataByPrice.value);
});

let debouncedHandleSearchInput = debounce(
  () => handleSearchInput(searchData, productSearch.value),
  1000
);
productSearch.addEventListener("input", debouncedHandleSearchInput);

fetchAllData();
