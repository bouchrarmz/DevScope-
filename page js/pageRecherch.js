const searchbtn= document.querySelector("#btnsearch");
const regexnom = /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/;
 const error=document.querySelector('#msgerror')
 const search=document.querySelector('#nomsearchr')
 
  function validNom(){
    if(!regexnom){
        error.textContent= " chiffres et tirets, entre 1 et 39 caractères"
    }
    if(search.Value.trim()===''){
        error.textContent='le chemp est vide'
    }
}