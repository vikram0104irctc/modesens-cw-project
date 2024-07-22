
let baseUrl = `https://traveling-ubiquitous-study.glitch.me`;

let signupBtn = document.getElementById('signupSubmitBtn');
const handleSignup = async (e) => {
    e.preventDefault();

    let name = document.getElementById('signupName');
    let email = document.getElementById('signupEmail');
    let address = document.getElementById('signupAddress');
    let password = document.getElementById('signupPassword');
    let phoneNo = document.getElementById('signupPhoneNo');

    if (name.value == '' || email.value == '' || address.value == '' || password.value == '' || phoneNo.value == '') {
        alert('Please fill all the fields');
        return;
    }

    let userData = {
        id: Math.floor(Math.random() * 1000000 + 1),
        name: name.value,
        email: email.value,
        password: password.value,
        phoneNo: phoneNo.value,
        address: address.value,
        wishlist : [],
        cart : [],
        userOrder : []
    }

    fetch(`${baseUrl}/users`)
        .then((res) => res.json())
        .then((res) => {
            let usersArr = res.filter((ele) => {
                return ele.email == email.value
            })

            if (usersArr.length == 0) {
                fetch(`${baseUrl}/users`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userData)
                }).then((res) => {
                    alert('Signup Successfull')
                    window.location.href = '../login/login.html'
                })
            }
            else {
                alert('Username already exist !!')
            }
        })

}

signupBtn.addEventListener('click', handleSignup);

