const login = async (event) =>{
    event.preventDefault();

    const email = document.getElementById('inputEmail').value.trim();
    const password = document.getElementById('inputPassword').value.trim();

    if(email && password) {
        const res = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(res.ok) {
            document.location.replace('/homepage');
        }else{
            alert(res.statusText);
        }
    }

};


document.querySelector('.login').addEventListener('submit', login);