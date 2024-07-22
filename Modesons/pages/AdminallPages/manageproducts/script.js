let searchinput = document.getElementById("searchinput");
let searchbutton = document.getElementById("searchbutton");
let usersData = document.getElementById("tabletypedata");
let usersurl = "https://traveling-ubiquitous-study.glitch.me/users";
let kidurl = "https://traveling-ubiquitous-study.glitch.me/kidsproducts";
let beautyurl = "https://traveling-ubiquitous-study.glitch.me/beautyproducts";
let homeurl = "https://traveling-ubiquitous-study.glitch.me/homeproducts";
let menurl = "https://traveling-ubiquitous-study.glitch.me/menproducts";
let womenurl = "https://traveling-ubiquitous-study.glitch.me/womenproducts";
let dataUrl = [kidurl, beautyurl, homeurl, menurl, womenurl];


let fetchData = async (URL) => {
  let res = await fetch(URL);
  let data = await res.json();
  return data;
};

let ShowData = (searchdata) => {
  usersData.innerHTML = "";
  let div1 = document.createElement("div");
  div1.className = "tabletypedatainner";
  let userid = document.createElement("h4");
  userid.style.paddingBottom = "5px";
  userid.innerText = "ID";
  let title = document.createElement("h4");
  title.style.paddingBottom = "5px";
  title.innerText = "Name";
  let price = document.createElement("h4");
  price.innerText = "Price";
  price.style.paddingBottom = "5px";
  let category = document.createElement("h4");
  category.innerText = "Category";
  category.style.paddingBottom = "5px";
  div1.append(userid, title, price, category);
  usersData.append(div1);
  let hr = document.createElement("hr");
  usersData.append(hr);
  searchdata.forEach((ele) => {
    let div2 = document.createElement("div");
    div2.className = "tabletypedatainner";
    let userid = document.createElement("p");
    userid.innerText = ele.id;
    let title = document.createElement("p");
    title.innerText = ele.title;
    let price = document.createElement("p");
    price.innerText = ele.price;
    let category = document.createElement("p");
    category.innerText = ele.category;
    let childcard = document.createElement("div");
    childcard.style.display = "flex";
    childcard.style.gap = "15px";
    childcard.style.alignItems = "center";
    let editbtn = document.createElement("button");
    editbtn.innerText = "Edit";
    editbtn.style.padding = "5px 20px";
    editbtn.style.borderRadius = "5px";
    editbtn.style.border = "none";
    editbtn.style.backgroundColor = "#fff2c6";
    editbtn.style.color = "black";
    editbtn.style.cursor = "pointer";
    editbtn.addEventListener("click", () => handleEdit(ele.id, div2,ele.category));
    let deletebtn = document.createElement("button");
    deletebtn.innerHTML = `<i class="ri-delete-bin-5-fill"></i>`;
    deletebtn.style.padding = "5px 20px";
    deletebtn.style.borderRadius = "5px";
    deletebtn.style.border = "none";
    deletebtn.style.backgroundColor = "#ffe0d3";
    deletebtn.style.color = "black";
    deletebtn.style.cursor = "pointer";
    deletebtn.addEventListener("click", () => handleDelete(ele.id,ele.category));
    childcard.append(editbtn, deletebtn);
    div2.append(userid, title, price, category, childcard);
    usersData.append(div2);
  });
};

let handleDelete = (value,categoryf) => {
  let newurl = `https://traveling-ubiquitous-study.glitch.me/${categoryf}/${value}`;
  fetch(newurl, {
    method: "DELETE",
  }).then(() => {
    window.location.reload();
  });
};
let handleSubmit = (value, inputvalue, selectvalue,categoryf) => {
  if (inputvalue && selectvalue) {
    let newurl = `https://traveling-ubiquitous-study.glitch.me/${categoryf}/${value}`;
    let requestBody = {};
    requestBody[selectvalue] = inputvalue;
    fetch(newurl, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then(() => {
      alert("Product Data Edited Successfully");
      window.location.reload();
    });
  } else {
    alert("Please fill all the fields");
  }
};

let editbtnflag = "ram";
let handleEdit = (value, div2,categoryf) => {
  if (editbtnflag == "ram") {
    let cardofedit = document.createElement("div");
    let editedinput = document.createElement("input");
    editedinput.style.padding = "3px";
    editedinput.style.borderRadius = "5px";
    editedinput.style.border = "2px solid gray";
    cardofedit.style.display = "flex";
    cardofedit.style.flexDirection = "column";
    cardofedit.style.gap = "10px";
    editedinput.type = "text";
    editedinput.required = true;
    let select = document.createElement("select");
    select.required = true;
    select.style.padding = "3px";
    select.style.borderRadius = "5px";
    select.style.border = "2px solid gray";
    let defaultOption = document.createElement("option");
    defaultOption.innerText = "Select";
    select.appendChild(defaultOption);
    let options = ["ID", "Title", "Price","Category","OldPrice"];
    options.forEach((optionText) => {
      let option = document.createElement("option");
      option.innerText = optionText;
      option.value = optionText.toLowerCase();
      select.appendChild(option);
    });
    let image = document.createElement("option");
    image.innerText = "Imagelink";
    image.value = "Imagelink";
    select.appendChild(image);
    let submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";
    submitBtn.style.padding = "5px";
    submitBtn.style.borderRadius = "5px";
    submitBtn.style.border = "none";
    submitBtn.style.backgroundColor = "#fd7238";
    submitBtn.style.color = "black";
    submitBtn.style.cursor = "pointer";
    submitBtn.addEventListener("click", () => {
      handleSubmit(value, editedinput.value, select.value,categoryf);
    });
    cardofedit.append(editedinput, select, submitBtn);
    div2.append(cardofedit);
    editbtnflag = "laxman";
  }
};

let handleSearch = (searchData, value) => {
  let ndata = searchData.filter((ele) => {
    return (
      ele.title.toLowerCase().includes(value.toLowerCase()) ||
      ele.id.includes(value) ||
      ele.category.toLowerCase().includes(value.toLowerCase())
    );
  });
  ShowData(ndata)
};

searchbutton.addEventListener("click", () =>
  handleSearch(searchData, searchinput.value)
);

let searchData = [];
let StoreDataforSearch = async (URL) => {
  let data = await fetchData(URL);
  data.forEach((ele) => {
    searchData.push(ele);
  });
};

let fetchAllData = async () => {
  let promises = dataUrl.map((url) => StoreDataforSearch(url));
  await Promise.all(promises);
  ShowData(searchData);
};

fetchAllData();
