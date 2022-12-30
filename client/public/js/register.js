
document.querySelector(".entry-form").addEventListener('submit', e => {
    e.preventDefault();

    sessionStorage.clear();

    const userName = document.querySelector('.entry-form [name="username"]').value;
    const password = document.querySelector('.entry-form [name="password"]').value;
    const rePassword = document.querySelector('.entry-form [name="repassword"]').value;
    const registerError = document.querySelector("#register-error");
    const apiUrl = 'http://localhost:3000';

    const regex = /\s/;
    if(regex.test(userName)){
        registerError.innerHTML = 'El nombre de usuario no es válido';
        return;
    }

    if (password !== rePassword) {
        registerError.innerHTML = 'Los passwords no coinciden';
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
            
            window.location.replace('./index.html')
        } else {
            registerError.innerHTML = data.message;
        }
    }).catch(err => registerError.innerHTML = err.message);

})

