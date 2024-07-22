let checkoutBtn = document.getElementById("checkoutBtn");
let paymentSuccessfullContainer = document.getElementById("paymentSuccessfullContainer");
let paymentSuccessfullBtn = document.getElementById("paymentSuccessfullBtn");
let paymentCheckoutContainer = document.getElementById("paymentCheckoutContainer")



const handleCheckout = (event) => {
    event.preventDefault();
    console.log("Payment Successfull");
    paymentSuccessfullContainer.style.display = "block";
    paymentCheckoutContainer.style.display = "none";
    setTimeout(() => {
        window.location.href = "../../index.html";
    }, 3000);
}


checkoutBtn.addEventListener("click", (event) => { handleCheckout(event) });


