function control() {
    var username = document.getElementById('user').value;
    if (username !== null || username !== '') {
        document.getElementById('logIn').disabled = false;
    }
}


function save() {
    var username = document.getElementById('user').value;
    if (username === null || username === '') {
        document.getElementById('logIn').disabled = true;
        alert('Devi inserire il tuo nome');
    }
    else {
        localStorage.setItem('Utente', username);
        change();
        break;
    }
}

function change() {

    let loginForm = document.getElementById('loginForm'); //recupero elemento con id loginForm (ovvero l'elemento div nella pagina html)
    loginForm.style.display = "none";

    //Recupero il tasto login e lo faccio sparire

    let loginButton1 = document.getElementById('logIn');
    loginButton1.style.display = "none";

    //Recupero il tasto logout e lo faccio comparire
    let logoutButton2 = document.getElementById('logOut');
    logoutButton2.style.display = "";

}

function canc() {

    localStorage.clear();

    let loginForm = document.getElementById('loginForm'); //recupero elemento con id loginForm (ovvero l'elemento div nella pagina html)
    loginForm.style.display = "";

    let loginButton1 = document.getElementById('logIn');
    loginButton1.style.display = "";

    let loginButton2 = document.getElementById('logOut');
    loginButton2.style.display = "none";
}