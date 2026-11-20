
import { api } from './confIg.js';
import{modifierC, deletC} from './api.js'
let candidats = [];
let candidatAModifier = null;
 const container=document.querySelector('#section')
 const nomsearch=document.querySelector('#inputnom')
// Modificatio et suppresion
const annulerM=document.querySelector('#annulerModification')
const enregistrerM=document.querySelector('#enregistrerModification')
const modal=document.querySelector('#modalModification')
 const nomCandidatModal=document.querySelector('#nomCandidatModal')
  const statutCandidat=document.querySelector('#statutCandidat')
const  noteCandidat=document.querySelector('#noteCandidat')
 const commentaireC=document.querySelector('#commentaireCandidat')
 const modalSuppression = document.querySelector('#modalSuppression');
const annulerSuppression = document.querySelector('#annulerSuppression');
const confirmerSuppression = document.querySelector('#confirmerSuppression');
let idASup = null;
 let id=null
 export async function afficherShortlist(listeCandidats ) {
    
        try {
        const response = await fetch(api);

        if (!response.ok) {
            throw new Error("Erreur lors du chargement");
        }

        candidats = await response.json();

        container.innerHTML = "";

        const listeAAfficher = listeCandidats || candidats;

         listeAAfficher.forEach(res => {
             const card = document.createElement("div");
             const rating = Math.max(0, Math.min(5, Number(res.rating) || 0));
              const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
              const dateAjout = new Date(res.date).toLocaleDateString("fr-FR");
         card.className = `
             bg-[#101321] border border-gray-800
             rounded-3xl p-5 md:p-6
             flex flex-col md:flex-row
             items-center justify-between gap-10
             card
         `;
         card.innerHTML = `
             <div class="flex items-center gap-5 w-full">
 
                 <img
                     src="${res.avatar_url}"
                     class="w-16 h-16 rounded-full border-4
                     border-fuchsia-500 object-cover"
                 >
                 <div>
                     <h3 class="text-white text-xl font-bold">
                         ${res.name}
                     </h3>
                     <div class="flex items-center gap-3 mt-1">
 
                         <span class="text-gray-400 text-sm">
                             @${res.login}
                         </span>
 
                         <span class="text-cyan-400 border
                         border-cyan-700 rounded-lg px-2 text-sm">
                             ${res.language}
                         </span>
 
                     </div>
 
                     <p class="text-cyan-300 italic mt-2">
                         ${res.note || "Aucune note."} 
                     </p>
 
                     <p class="text-gray-500 text-sm mt-2">
                         Ajouté le ${dateAjout}
                     </p>
                 </div>
 
             </div>
 
             <div class="flex items-center gap-3 flex-wrap">
 
                 <span class="text-lime-400 text-xl">
                      ${stars}
                 </span>
 
                 <button
                     class="border border-cyan-500 text-cyan-400
                     px-4 py-2 rounded-xl"
                     data-action="status"
                     data-id="${res.id}">
                     ● ${res.status}
                 </button>
 
                 <button
                     class="border border-cyan-700 text-cyan-400
                     px-4 py-2 rounded-xl edit"
                     data-action="edit"
                     data-id="${res.id}">
                      Modifier
                 </button>
                 <button
                     class="border border-red-500 text-red-400
                     px-4 py-2 rounded-xl"
                     data-action="delete"
                     data-id="${res.id}">
                     ✕ Supprimer
                 </button>
             </div>
             
         `;
         container.appendChild(card);
     });
             
     } catch (error) {
         console.log(error.message);
     }
 }
  afficherShortlist()
function modifercondidat(candidats){
   nomCandidatModal.textContent= candidats.name
   statutCandidat.value= candidats.status
   noteCandidat.value= candidats.rating
   commentaireC.value= candidats.note
}
 container.addEventListener('click',function(e){
   const btnclick= e.target.closest('[data-action="edit"]')
   const btnclickd = e.target.closest('[data-action="delete"]')
   
   console.log('hi im btnedit')
   if(btnclick){
     id =btnclick.dataset.id;
     candidatAModifier = candidats.find((c)=>String(c.id)===id )
   console.log(candidatAModifier);
   if(candidatAModifier){
   modal.classList.remove('hidden');
    modifercondidat(candidatAModifier);}
   }
   if(btnclickd ){
    idASup =  btnclickd.dataset.id ;
     modalSuppression.classList.remove('hidden');
   }
 })
 enregistrerM.addEventListener('click', async function(e){
    e.preventDefault()
   const candidatModifie = {
        ...candidatAModifier,
        status: statutCandidat.value,
        rating: Number(noteCandidat.value),
        note: commentaireC.value
    };
try{
    await modifierC( id, candidatModifie)

    modal.classList.add('hidden');
    await afficherShortlist()
     candidatAModifier = null;
        id = null;


}catch(error){
    console.log(error.message);

}
 })
 annulerM.addEventListener('click' ,function(){
    modal.classList.add('hidden');
 })
annulerSuppression.addEventListener('click' , async function(){
   modalSuppression.classList.add('hidden');
 

 })
 confirmerSuppression.addEventListener('click',async()=>{
    console.log('suppreme')
    const btnSupprimer = container.querySelector(
        `[data-action="delete"][data-id="${idASup}"]`)
 try {
        console.log('suppreme');
         btnSupprimer.disabled = true;
        btnSupprimer.classList.add('opacity-50', 'cursor-not-allowed');

        await deletC(idASup);

        modalSuppression.classList.add('hidden');

        await afficherShortlist();

        idASup = null;

    } catch(error) {
        console.log(error.message);
         btnSupprimer.disabled = false;
        btnSupprimer.classList.remove('opacity-50', 'cursor-not-allowed');
    }
    //   const condidtsup=candidats.filter((c)=> c.id!==id )
    //   afficherShortlist(condidtsup)
    //   deletC(idASup)
 })
 let status = "TOUT";
function rechercheuser(){

    console.log(nomsearch.value)
    const serch=nomsearch.value.toLowerCase()
    const  usersearch= candidats.filter((user)=>
     (user.name || "").toLowerCase().includes(serch)&& 
     (status==="TOUT" ||user.status === status)
    
 )
     console.log(usersearch)
    afficherShortlist(usersearch)
}
 const liste=document.querySelector('#liste')
function filtrsatutus(){
    liste.addEventListener('click', (e)=>{
       
    const  statut= e.target.closest(".filter")
    if(statut){
        status=statut.dataset.st
         console.log("Status sélectionné :", status);
            console.log("Status des candidats :", candidats.map(c => c.status));

            rechercheuser()
    }
    })
}
filtrsatutus();
nomsearch.addEventListener('input',rechercheuser);


