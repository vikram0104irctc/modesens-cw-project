let baseUrl = `https://traveling-ubiquitous-study.glitch.me/users`;

let container = document.getElementById("wishlist-card-container");

let currentUser = JSON.parse(localStorage.getItem("isLoggedinUser"));
let idofCurrentUser = currentUser.user.id;

let mainWishlistContainer = document.getElementById("main-wishlist-container");

let fetchData = async (baseURL) => {
  let res = await fetch(baseURL);
  let data = await res.json();
  return data;
};

const showData = async (baseURL) => {
  mainWishlistContainer.innerHTML = "";
  let newurl = `${baseURL}/${idofCurrentUser}`;
  let data = await fetchData(newurl);
  data.wishlist.forEach((ele) => {
    let wishlistCard = document.createElement("div");
    wishlistCard.className = "wishlist-card";
    let wishlistCardImage = document.createElement("div");
    wishlistCardImage.className = "wishlist-card-image";
    let wishlistCardImageSrc = document.createElement("img");
    wishlistCardImageSrc.src = ele.Imagelink;
    wishlistCardImageSrc.id = "wishlist-card-image";
    wishlistCardImage.append(wishlistCardImageSrc);
    let wishlistCardName = document.createElement("div");
    wishlistCardName.className = "wishlist-card-text";
    let wishlistCardNameText = document.createElement("h3");
    wishlistCardNameText.innerText = ele.title;
    let wishlistCardDesc = document.createElement("p");
    wishlistCardDesc.innerText = ele.desc;
    let wishlistCardPrice = document.createElement("p");
    wishlistCardPrice.innerText = ele.price;
    wishlistCardName.append(
      wishlistCardNameText,
      wishlistCardDesc,
      wishlistCardPrice
    );
    wishlistCard.append(wishlistCardImage, wishlistCardName);
    mainWishlistContainer.append(wishlistCard);
  });
};

showData(baseUrl);
