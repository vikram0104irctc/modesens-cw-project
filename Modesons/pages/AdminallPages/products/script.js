let countOfproduct = document.getElementById("countofproduct");
let countOfuser = document.getElementById("countofuser");
let totalOrdercount = document.getElementById("totalordercount");
let dataContainer = document.getElementById("tabletypedata");
let searchinput = document.getElementById("searchinput");
let searchbutton = document.getElementById("searchbutton");
let kidurl = "https://traveling-ubiquitous-study.glitch.me/kidsproducts";
let beautyurl = "https://traveling-ubiquitous-study.glitch.me/beautyproducts";
let homeurl = "https://traveling-ubiquitous-study.glitch.me/homeproducts";
let menurl = "https://traveling-ubiquitous-study.glitch.me/menproducts";
let womenurl = "https://traveling-ubiquitous-study.glitch.me/womenproducts";
let usersurl = "https://traveling-ubiquitous-study.glitch.me/users";
let ordersurl = "https://traveling-ubiquitous-study.glitch.me/Orders";
let dataUrl = [kidurl, beautyurl, homeurl, menurl, womenurl];

let fetchData = async (URL) => {
  let res = await fetch(URL);
  let data = await res.json();
  return data;
};

let ShowData = async (URL) => {
  let data = await fetchData(URL);
  let div1 = document.createElement("div");
  data.forEach((ele) => {
    let div2 = document.createElement("div");
    div2.className = "tabletypedatainner";
    let ProductID = document.createElement("p");
    ProductID.innerText = ele.id;
    let Name = document.createElement("p");
    Name.innerText = ele.title;
    let price = document.createElement("p");
    price.innerText = ele.price;
    let category = document.createElement("p");
    category.innerText = ele.category;
    let Image = document.createElement("img");
    Image.src = ele.Imagelink;
    Image.style.height = "50px";
    Image.style.width = "50px";
    Image.style.borderRadius = "50%";
    div2.append(ProductID, Name, price, category, Image);
    dataContainer.append(div2);
  });
};

dataUrl.forEach((ele) => {
  ShowData(ele);
});

let handleSearch = (searchData, value) => {
  let ndata = searchData.filter((ele) => {
    return (
      ele.title.toLowerCase().includes(value.toLowerCase()) ||
      ele.id.includes(value) ||
      ele.category.toLowerCase().includes(value.toLowerCase())
    );
  });
  dataContainer.innerHTML = "";
  console.log(ndata);
  let div1 = document.createElement("div");
  div1.className = "tabletypedatainner";
  let ProductID = document.createElement("h4");
  ProductID.style.paddingBottom = "5px";
  ProductID.innerText = "Product ID";
  let Name = document.createElement("h4");
  Name.style.paddingBottom = "5px";
  Name.innerText = "Name";
  let Price = document.createElement("h4");
  Price.innerText = "Price";
  Price.style.paddingBottom = "5px";
  let ProductType = document.createElement("h4");
  ProductType.innerText = "Product Type";
  ProductType.style.paddingBottom = "5px";
  let Image = document.createElement("h4");
  Image.innerText = "Image";
  Image.style.paddingBottom = "5px";
  div1.append(ProductID, Name, Price, ProductType, Image);
  dataContainer.append(div1);
  let hr = document.createElement("hr");
  dataContainer.append(hr);
  ndata.forEach((ele) => {
    let div2 = document.createElement("div");
    div2.className = "tabletypedatainner";
    let ProductID = document.createElement("p");
    ProductID.innerText = ele.id;
    let Name = document.createElement("p");
    Name.innerText = ele.title;
    let price = document.createElement("p");
    price.innerText = ele.price;
    let category = document.createElement("p");
    category.innerText = ele.category;
    let Image = document.createElement("img");
    Image.src = ele.Imagelink;
    Image.style.height = "50px";
    Image.style.width = "50px";
    Image.style.borderRadius = "50%";
    div2.append(ProductID, Name, price, category, Image);
    dataContainer.append(div2);
  });
};

let searchData = [];
let StoreDataforSearch = async (URL) => {
  let data = await fetchData(URL);
  data.forEach((ele) => {
    searchData.push(ele);
  });
};

dataUrl.forEach((ele) => {
  StoreDataforSearch(ele);
});

searchbutton.addEventListener("click", () =>
  handleSearch(searchData, searchinput.value)
);
