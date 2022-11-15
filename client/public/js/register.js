
document.querySelector(".entry-form").addEventListener('submit', e => {
    e.preventDefault();

    sessionStorage.clear();

    const userName = document.querySelector('.entry-form [name="username"]').value;
    const password = document.querySelector('.entry-form [name="password"]').value;
    const rePassword = document.querySelector('.entry-form [name="repassword"]').value;
    const registerError = document.querySelector("#register-error");
    const apiUrl = 'http://localhost:3000';

    //check for void username or spaces
    const regex = /\s/;
    if(regex.test(userName)){
        registerError.innerHTML = 'White-space alert! Not a valid username.';
        return;
    }

     //checking if repeted password matches original 
    if (password !== rePassword) {
        registerError.innerHTML = 'Passwords do not match.';
        return;
    }
   
    fetch(apiUrl + '/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userName, password, rePassword})
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === 'ok') {
            
            window.location.replace('../index.html')
        } else {
            registerError.innerHTML = data.message;
        }
    }).catch(err => registerError.innerHTML = err.message);

})

