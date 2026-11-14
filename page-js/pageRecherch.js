const searchbtn= document.querySelector("#btnsearch");
const regexnom = /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/;
 const errors=document.querySelector('#msgerror')
 const search=document.querySelector('#nomsearch')
const form=document.querySelector('.form')
  function validNom(){
    const nom = search.value.trim();
console.log(nom)
    if (nom === '') {
        errors.textContent = 'Le champ est vide';
        return false;
    }

    if (!regexnom.test(nom)) {
        errors.textContent = 'Chiffres et tirets, entre 1 et 39 caractères';
        return false;
    }

    errors.textContent = '';
    return true;

}
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!validNom()) {
        return;
    }

    const username = search.value.trim();

    window.location.href = `profil.html?username=${username}`;
});
