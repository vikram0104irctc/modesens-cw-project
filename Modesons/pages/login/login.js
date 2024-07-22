// let profileBtn = document.getElementById('profileBtn');
// let mainDropdown = document.getElementById('nav-main-dropdown');
// let MainDropdownflag = true;

// function showMainDropdown() {
//     if (MainDropdownflag) {
//         mainDropdown.style.display = 'block';
//         MainDropdownflag = false;
//     }
//     else {
//         mainDropdown.style.display = 'none';
//         MainDropdownflag = true;
//     }
// }

let baseUrl = `https://traveling-ubiquitous-study.glitch.me`;

document.addEventListener('DOMContentLoaded', () => {
    let loginBtn = document.getElementById('loginSubmitBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', handleLogin);
    } else {
        console.error('Login button not found');
    }
});

const handleLogin = async (e) => {
    e.preventDefault();

    let loginEmail = document.getElementById('loginEmail');
    let loginPassword = document.getElementById('loginPassword');

    let email = loginEmail.value;
    let password = loginPassword.value;

    if (email.trim() === '' || password.trim() === '') {
        alert('Fill all the fields');
    } else {
        try {
            let response = await fetch(`${baseUrl}/users`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            let res = await response.json();

            let usersArr = res.filter((user) => {
                return user.email === email && user.password === password;
            });

            if (email === 'admin@gmail.com' && password === 'admin') {
                window.location.href = '../AdminallPages/dashboard/index.html'
            }

            else if (usersArr.length === 0) {
                alert('Please Register First');
            } else {
                alert('Login Successful');
                localStorage.setItem('isLoggedinUser', JSON.stringify({
                    id: usersArr[0].id,
                    user: usersArr[0]
                }));
                window.location.href = "../../index.html";

            }

        } catch (error) {
            alert('Error during login. Please try again later.');
        }
    }
};

