let form  = document.querySelector("form")


let handleSubmit = (event)=>{
  event.preventDefault()
  let id = Math.floor(Math.random() * 100000 + 1)
  let title = event.target[0].value
  let desc = event.target[1].value
  let oldprice = event.target[2].value
  let price = event.target[3].value
  let stores = event.target[4].value
  let Imagelink = event.target[5].value
  let category = event.target[6].value
  let obj = {
    id,
    Imagelink,
    title,
    desc,
    oldprice,
    price,
    stores,
    category
  }
  console.log(obj)
  let newurl = `https://traveling-ubiquitous-study.glitch.me/${category}`
  fetch(newurl, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(obj)
  }).then((res) => {
    alert("Data Added Seccessfully")
    window.location.reload();
  })
}

form.addEventListener("submit",(event)=>handleSubmit(event))
