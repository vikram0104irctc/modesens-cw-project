
let baseUrl = `https://traveling-ubiquitous-study.glitch.me`;

let productImage = document.getElementById('product-image');
let productTitle = document.getElementById('product-title');
let productDescription = document.getElementById('product-desc');
let productPrice = document.getElementById('product-price');
let productOldPrice = document.getElementById('product-oldprice');
let productDiscount = document.getElementById('product-discount');
let productStore = document.getElementById('product-store');


let storedProduct = JSON.parse(localStorage.getItem('singleProduct'));
let isLoggedInUserData = JSON.parse(localStorage.getItem('isLoggedinUser'));


const fetchUserData = async () => {
  let response = await fetch(`${baseUrl}/users/${isLoggedInUserData.user.id}`);
  let data = await response.json();
  return data
}


productImage.src = storedProduct.Imagelink;
productTitle.textContent = storedProduct.title;
productDescription.textContent = storedProduct.desc;
productPrice.textContent = storedProduct.price;
productOldPrice.textContent = storedProduct.oldprice;
productStore.textContent = storedProduct.store;

let oldPrice = storedProduct.oldprice.replace(/₹|,/g, "").trim();
let newPrice = storedProduct.price.replace(/₹|,/g, "").trim();
let oldPriceNumber = Number(oldPrice);
let newPriceNumber = Number(newPrice);
let discountPercentage = Math.abs(
  Math.round(((oldPriceNumber - newPriceNumber) / newPriceNumber) * 100)
);
productDiscount.textContent = `(${discountPercentage}% off)`;

// -=-=-=-=-=-=-==-=-=-=-=-=-=-=-

let addToCartBtn = document.getElementById('addToCartBtn');

const handleAddToCart = async () => {

  if (localStorage.getItem('isLoggedinUser')) {
    let obj = {
      "id": storedProduct.id,
      "Imagelink": storedProduct.Imagelink,
      "title": storedProduct.title,
      "desc": storedProduct.desc,
      "oldprice": storedProduct.oldprice,
      "price": storedProduct.price,
      "stores": storedProduct.stores,
      "category": storedProduct.category,
      "quantity": 1
    }


    let userCartData = await fetchUserData()
    console.log(userCartData)

    await fetch(`${baseUrl}/users/${isLoggedInUserData.user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cart: [...userCartData.cart, obj]
      })
    }).then(() => {
      alert('Product added to Cart');
    })
  } else {
    alert('Please login first');
  }





}

addToCartBtn.addEventListener('click', handleAddToCart);

let whishlistBtn = document.getElementById('whishlistBtn');

const handleAddToWhishlist = async () => {

  if (localStorage.getItem('isLoggedinUser')) {

    let obj = {
      "id": storedProduct.id,
      "Imagelink": storedProduct.Imagelink,
      "title": storedProduct.title,
      "desc": storedProduct.desc,
      "oldprice": storedProduct.oldprice,
      "price": storedProduct.price,
      "stores": storedProduct.stores,
      "category": storedProduct.category,
      "quantity": 1
    }

    let userCartData = await fetchUserData()
    console.log(userCartData)

    await fetch(`${baseUrl}/users/${isLoggedInUserData.user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        wishlist: [...userCartData.wishlist, obj]
      })
    }).then(() => {
      alert('Product added to wishlist');
    })

  } else {
    alert('Please login first');
  }

}

whishlistBtn.addEventListener('click', handleAddToWhishlist);

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
