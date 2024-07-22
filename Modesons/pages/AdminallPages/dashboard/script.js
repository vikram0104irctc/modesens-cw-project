let countOfproduct = document.getElementById("countofproduct");
let countOfuser = document.getElementById("countofuser");
let totalOrdercount = document.getElementById("totalordercount");
let recentOrders = document.getElementById("tabletypedata");
let searchinput = document.getElementById("searchinput")
let searchbutton = document.getElementById("searchbutton")
let kidurl = "https://traveling-ubiquitous-study.glitch.me/kidsproducts";
let beautyurl = "https://traveling-ubiquitous-study.glitch.me/beautyproducts";
let homeurl = "https://traveling-ubiquitous-study.glitch.me/homeproducts";
let menurl = "https://traveling-ubiquitous-study.glitch.me/menproducts";
let womenurl = "https://traveling-ubiquitous-study.glitch.me/womenproducts";
let usersurl = "https://traveling-ubiquitous-study.glitch.me/users";
let ordersurl = "https://traveling-ubiquitous-study.glitch.me/Orders";
let numberOfProduct = 0;

let fetchData = async (URL) => {
  let res = await fetch(URL);
  let data = await res.json();
  return data;
};

let countofOrders = async (URL) => {
  let data = await fetchData(URL);
  totalOrdercount.innerText = data.length;
  recentOrders.innerHTML = "";
  let div1 = document.createElement("div");
  div1.className = "tabletypedatainner";
  let userh = document.createElement("h4");
  userh.style.paddingBottom = "5px"
  userh.innerText = "User";
  let Date = document.createElement("h4");
  Date.style.paddingBottom = "5px"
  Date.innerText = "Date Order";
  let Price = document.createElement("h4");
  Price.innerText = "Price";
  Price.style.paddingBottom = "5px"
  let Status = document.createElement("h4");
  Status.innerText = "Price";
  Status.innerText = "Status";
  div1.append(userh, Date, Price, Status);
  recentOrders.append(div1);
  let hr = document.createElement("hr")
  recentOrders.append(hr);
  data.forEach((ele) => {
    let div2 = document.createElement("div");
    div2.className = "tabletypedatainner";
    let userh = document.createElement("p");
    userh.innerText = ele.username;
    let Date = document.createElement("p");
    Date.innerText = ele.date;
    let Price = document.createElement("p");
    Price.innerText = ele.price;
    let Status = document.createElement("p");
    Status.innerText = ele.status;
    div2.append(userh, Date, Price, Status);
    recentOrders.append(div2);
  });
};

countofOrders(ordersurl);

let countofUsers = async (URL) => {
  let data = await fetchData(URL);
  countOfuser.innerText = data.length;
};

countofUsers(usersurl);

let allProducturl = [kidurl, beautyurl, homeurl, menurl, womenurl];
allProducturl.forEach((ele) => {
  let data = fetchData(ele).then((ele) => {
    numberOfProduct += ele.length;
    countOfproduct.innerText = numberOfProduct;
  });
});


let handleSearch = async (URL,value)=>{
  let data = await fetchData(URL);
  let ndata = data.filter((elem)=>{
    return elem.username.toLowerCase().includes(value.toLowerCase())
  })
  recentOrders.innerHTML = "";
  let div1 = document.createElement("div");
  div1.className = "tabletypedatainner";
  let userh = document.createElement("h4");
  userh.style.paddingBottom = "5px"
  userh.innerText = "User";
  let Date = document.createElement("h4");
  Date.style.paddingBottom = "5px"
  Date.innerText = "Date Order";
  let Price = document.createElement("h4");
  Price.innerText = "Price";
  Price.style.paddingBottom = "5px"
  let Status = document.createElement("h4");
  Status.innerText = "Price";
  Status.innerText = "Status";
  div1.append(userh, Date, Price, Status);
  recentOrders.append(div1);
  let hr = document.createElement("hr")
  recentOrders.append(hr);
  ndata.forEach((ele) => {
    let div2 = document.createElement("div");
    div2.className = "tabletypedatainner";
    let userh = document.createElement("p");
    userh.innerText = ele.username;
    let Date = document.createElement("p");
    Date.innerText = ele.date;
    let Price = document.createElement("p");
    Price.innerText = ele.price;
    let Status = document.createElement("p");
    Status.innerText = ele.status;
    div2.append(userh, Date, Price, Status);
    recentOrders.append(div2);
  });
}

searchbutton.addEventListener("click", ()=>handleSearch(ordersurl,searchinput.value))
