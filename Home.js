function benvenuto() {
    var name = localStorage.getItem('Utente');
    if (name != null)
        alert("Benvenuto" + ' ' + name);
}

