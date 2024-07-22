let newSubtotal = 0
let logoutRedirect = document.getElementById("logoutRedirect")
let cartItems = document.getElementById("cart-items")
let currentUser = JSON.parse(localStorage.getItem('isLoggedinUser'))
let idofCurrentUser = currentUser.user.id
let baseURL = "https://traveling-ubiquitous-study.glitch.me/users"

let cartSubtotal = document.getElementById("cart-subtotal")
let cartDiscount = document.getElementById("cart-discount")
let cartTotal = document.getElementById("cart-total")

let fetchData = async (baseURL) => {
  let res = await fetch(baseURL)
  let data = await res.json()
  return data
}


const showData = async (baseURL) => {
  let newurl = `${baseURL}/${idofCurrentUser}`
  cartItems.innerHTML = ""
  let data = await fetchData(newurl)
  data.cart.forEach((ele) => {
    let card = document.createElement("div")
    card.className = "cart-card"
    let cartCardDetail = document.createElement("div")
    cartCardDetail.className = "cart-card-detail"
    let cartCardImage = document.createElement("div")
    cartCardImage.className = "card-image"
    let cartCardImageTag = document.createElement("img")
    cartCardImageTag.src = ele.Imagelink
    cartCardImage.append(cartCardImageTag)
    let cartCardDetailTag = document.createElement("div")
    cartCardDetailTag.className = "card-text"
    let cartCardDetailTag1 = document.createElement("h2")
    cartCardDetailTag1.innerText = ele.title
    let cartCardDetailTag2 = document.createElement("p")
    cartCardDetailTag2.innerText = ele.category
    cartCardDetailTag.append(cartCardDetailTag1, cartCardDetailTag2)
    cartCardDetail.append(cartCardImage, cartCardDetailTag)
    let cartCardbtn = document.createElement("div")
    cartCardbtn.className = "cart-card-btn"
    let cartCardbtnminus = document.createElement("button")
    cartCardbtnminus.innerText = "-"
    let countOfProduct = document.createElement("span")
    countOfProduct.innerText = ele.quantity
    let cartCardbtnplus = document.createElement("button")
    cartCardbtnplus.innerText = "+"
    cartCardbtn.append(cartCardbtnminus, countOfProduct, cartCardbtnplus)
    let cartCartPrice = document.createElement("div")
    cartCartPrice.className = "cart-card-price"
    cartCartPrice.style.display = "flex"
    cartCartPrice.style.alignItems = "center"
    cartCartPrice.style.gap = "20px"
    let cartCartPriceTag = document.createElement("span")
    cartCartPriceTag.style.fontSize = "20px"
    cartCartPriceTag.style.fontWeight = "600"
    cartCartPriceTag.innerText = ele.price
    let cartCartDelete = document.createElement("span")
    cartCartDelete.className = "material-symbols-outlined"
    cartCartDelete.innerText = "Delete"

    cartCartPrice.append(cartCartPriceTag, cartCartDelete)
    card.append(cartCardDetail, cartCardbtn, cartCartPrice)
    cartItems.append(card)
    console.log(ele);
    
    
    
    let newPrice = ele.price.replace(/₹|,/g, "").trim();
    let newPriceNumber = Number(newPrice);
    newSubtotal += newPriceNumber
    let finalPrice = newSubtotal + 30


    cartSubtotal.textContent = newSubtotal
    cartDiscount.innerText = '20%'
    cartTotal.innerText = finalPrice

  })
}

showData(baseURL)


logoutRedirect.addEventListener("click", () => {
  localStorage.removeItem("isLoggedinUser")
  window.location.href = "../../index.html"
})







