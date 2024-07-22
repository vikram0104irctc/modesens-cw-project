let searchinput = document.getElementById("searchinput");
let searchbutton = document.getElementById("searchbutton");
let usersData = document.getElementById("tabletypedata");
let usersurl = "https://traveling-ubiquitous-study.glitch.me/users";

let fetchData = async (URL) => {
  let res = await fetch(URL);
  let data = await res.json();
  return data;
};

let ShowData = async (URL) => {
  let data = await fetchData(URL);
  usersData.innerHTML = "";
  let div1 = document.createElement("div");
  div1.className = "tabletypedatainner";
  let username = document.createElement("h4");
  username.style.paddingBottom = "5px";
  username.innerText = "Name";
  let email = document.createElement("h4");
  email.style.paddingBottom = "5px";
  email.innerText = "Email ID";
  let password = document.createElement("h4");
  password.innerText = "Password";
  password.style.paddingBottom = "5px";
  let phone = document.createElement("h4");
  phone.innerText = "Phone";
  div1.append(username, email, password, phone);
  usersData.append(div1);
  let hr = document.createElement("hr");
  usersData.append(hr);
  data.forEach((ele) => {
    let div2 = document.createElement("div");
    div2.className = "tabletypedatainner";
    let username = document.createElement("p");
    username.innerText = ele.name;
    let email = document.createElement("p");
    email.innerText = ele.email;
    let password = document.createElement("p");
    password.innerText = ele.password;
    let phone = document.createElement("p");
    phone.innerText = ele.phoneNo;
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
    editbtn.addEventListener("click", () => handleEdit(ele.id, div2));
    let deletebtn = document.createElement("button");
    deletebtn.innerHTML = `<i class="ri-delete-bin-5-fill"></i>`;
    deletebtn.style.padding = "5px 20px";
    deletebtn.style.borderRadius = "5px";
    deletebtn.style.border = "none";
    deletebtn.style.backgroundColor = "#ffe0d3";
    deletebtn.style.color = "black";
    deletebtn.style.cursor = "pointer";
    deletebtn.addEventListener("click", () => handleDelete(ele.id));
    childcard.append(editbtn, deletebtn);
    div2.append(username, email, password, phone, childcard);
    usersData.append(div2);
  });
};

let handleDelete = (value) => {
  let newurl = `https://traveling-ubiquitous-study.glitch.me/users/${value}`;
  fetch(newurl, {
    method: "DELETE",
  }).then(() =>{
    window.location.reload();
  } );
};

let handleSubmit = (value, inputvalue, selectvalue) => {
  if (inputvalue && selectvalue) {
    let newurl = `https://traveling-ubiquitous-study.glitch.me/users/${value}`;
    console.log(newurl);
    let requestBody = {};
    requestBody[selectvalue] = inputvalue;
    fetch(newurl, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then(() => {
      alert("User Data Edited Successfully")
      window.location.reload();
    });
  } else {
    alert("Please fill all the fields");
  }
};

let editbtnflag = "ram";
let handleEdit = (value, div2) => {
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
    let options = ["Name", "Email", "Password"];
    options.forEach((optionText) => {
      let option = document.createElement("option");
      option.innerText = optionText;
      option.value = optionText.toLowerCase();
      select.appendChild(option);
    });
    let phone = document.createElement("option");
    phone.innerText = "PhoneNo";
    phone.value = "phoneNo";
    select.appendChild(phone);
    let submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";
    submitBtn.style.padding = "5px";
    submitBtn.style.borderRadius = "5px";
    submitBtn.style.border = "none";
    submitBtn.style.backgroundColor = "#fd7238";
    submitBtn.style.color = "black";
    submitBtn.style.cursor = "pointer";
    submitBtn.addEventListener("click", () => {
      handleSubmit(value, editedinput.value, select.value);
    });
    cardofedit.append(editedinput, select, submitBtn);
    div2.append(cardofedit);
    editbtnflag = "laxman";
  }
};

ShowData(usersurl);

let handleSearch = async (URL, value) => {
  let data = await fetchData(URL);
  let ndata = data.filter((elem) => {
    return elem.name.toLowerCase().includes(value.toLowerCase());
  });
  usersData.innerHTML = "";
  let div1 = document.createElement("div");
  div1.className = "tabletypedatainner";
  let username = document.createElement("h4");
  username.style.paddingBottom = "5px";
  username.innerText = "Name";
  let email = document.createElement("h4");
  email.style.paddingBottom = "5px";
  email.innerText = "Email ID";
  let password = document.createElement("h4");
  password.innerText = "Password";
  password.style.paddingBottom = "5px";
  let phone = document.createElement("h4");
  phone.innerText = "Phone";
  div1.append(username, email, password, phone);
  usersData.append(div1);
  let hr = document.createElement("hr");
  usersData.append(hr);
  ndata.forEach((ele) => {
    let div2 = document.createElement("div");
    div2.className = "tabletypedatainner";
    let username = document.createElement("p");
    username.innerText = ele.name;
    let email = document.createElement("p");
    email.innerText = ele.email;
    let password = document.createElement("p");
    password.innerText = ele.password;
    let phone = document.createElement("p");
    phone.innerText = ele.phoneNo;
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
    editbtn.addEventListener("click", () => handleEdit(ele.id, div2));
    let deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";
    deletebtn.style.padding = "5px 20px";
    deletebtn.style.borderRadius = "5px";
    deletebtn.style.border = "none";
    deletebtn.style.backgroundColor = "#ffe0d3";
    deletebtn.style.color = "black";
    deletebtn.style.cursor = "pointer";
    deletebtn.addEventListener("click", () => handleDelete(ele.id));
    childcard.append(editbtn, deletebtn);
    div2.append(username, email, password, phone, childcard);
    usersData.append(div2);
  });
};

searchbutton.addEventListener("click", () =>
  handleSearch(usersurl, searchinput.value)
);
