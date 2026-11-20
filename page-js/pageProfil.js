
 //aside
 const avatar=document.querySelector('#avatar')
const nameb=document.querySelector('#nameb')
const bio=document.querySelector('#bio')
const location=document.querySelector('#location')
const created=document.querySelector('#createdAt')
const reposCount=document.querySelector('#reposCount')
const followers=document.querySelector('#followers')
const following=document.querySelector('#following')
const usernam=document.querySelector('#username')
const linkbrofile=document.querySelector('#profileLink')
const btnaddShortlist=document.querySelector('#addShortlist');
const msgerror=document.querySelector('#msgerror')
 const listelangage=document.querySelector('#listelangage')
   const  serchrepot= document.querySelector('#serchrepot')
//repo
const reposTotal = document.querySelector("#reposTotal");
const repositories = document.querySelector("#repositories");
const repoName = document.querySelector("#repoName");
const repoDescription = document.querySelector("#repoDescription");
const repoLanguage = document.querySelector("#repoLanguage");
const repoStars = document.querySelector("#repoStars");
const repoForks = document.querySelector("#repoForks");
const repoLink = document.querySelector("#repoLink");


import { rechercherUser,chargerRepos } from './api.js';
import { getCache, setCache } from './cache.js'
import { ajouterShortlist } from './ajouteShortList.js';

const params = new URLSearchParams(window.location.search);
const username = params.get('username');

let repos = [];
let condidate = null;

 export async  function afficherinfo(){
    if (!username)return
    let data = getCache(username)
    if(!data || !data.user){
        const results = await Promise.all([rechercherUser(username),chargerRepos(username)])
        const user = results[0];
        repos = results[1];
        if(!user)return;
        data={user,repos}
        setCache(username,data);
    }

    const user = data.user;
    repos = data.repos
    avatar.src= user.avatar_url
    nameb.textContent= user.name
    usernam.textContent=user.login
     bio.textContent= user.bio || "Pas de bio"
     location.textContent=user.location  || "Non renseigné"
     created.textContent=user.created_at 
     reposCount.textContent=user.public_repos
    followers.textContent=user.followers
    following.textContent=user.following
    linkbrofile.href=user.html_url
    condidate = {
    login: user.login,
    name: user.name,
    avatar_url: user.avatar_url,
    html_url: user.html_url,
    language: "",
    status: "À contacter",
    note: "",
    rating: 0,
    date:user.created_at
};
 }


 async function affichcartrepo(repos){
    repositories.innerHTML = "";
     reposTotal.textContent = repos.length;
     if (repos.length === 0) {
    const message = document.createElement("p");

    message.textContent = "Aucun dépôt trouvé";

    message.className = "text-gray-400 text-center py-8";

    repositories.append(message);
    return;
}
    repos.forEach(repo => {
    const card = document.createElement("div");
    card.className = "bg-[#1b2232] border border-gray-700 rounded-2xl p-5 hover:border-cyan-500";
    const title = document.createElement("h3");
    title.className = "text-lg font-bold text-cyan-400";
    const description = document.createElement("p");
    description.className = "text-gray-400 mt-4";

    title.textContent = repo.name;
    description.textContent = repo.description || "Pas de description";
     const info= document.createElement('div')
     info.className = "flex items-center gap-4 mt-3"; 
    const language = document.createElement("span");
    language.textContent = `• ${repo.language || "Non précisé"}`;
    const stars = document.createElement("span");
    stars.textContent = `★ ${repo.stargazers_count}`;
    const forks = document.createElement("span");
    forks.textContent = `⑂ ${repo.forks_count}`; 
    const updated = document.createElement("p");
    updated.textContent = `Mis à jour le ${new Date(repo.updated_at).toLocaleDateString("fr-FR")}`;
    info.append(language, stars, forks);

    card.append(title, description,info , updated);

    repositories.append(card);
});

  }

 
 btnaddShortlist.addEventListener('click', function(){
btnaddShortlist.textContent='conddidat ajouté'
   ajouterShortlist(condidate)
})

async function initialiserProfil() {

        await afficherinfo()
        affichcartrepo(repos);
}
let language = "TOUT";
function recherchrepot(){

    console.log(serchrepot.value)
    const serch=serchrepot.value.toLowerCase()
    const  repsearch= repos.filter((rep)=>
     rep.name.toLowerCase().includes(serch)&& 
     (language === "TOUT" || rep.language === language)
    
    )
     console.log(repsearch)
     affichcartrepo(repsearch)
}
function filtrerépot(){
    listelangage.addEventListener('click', (e)=>{
       
    const  lang= e.target.closest(".filter")
    if(lang){
         language =lang.dataset.lang
             recherchrepot()
    }
    })
}
filtrerépot();
initialiserProfil()
serchrepot.addEventListener('input', recherchrepot);
