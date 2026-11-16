

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
//repo
const reposTotal = document.querySelector("#reposTotal");
const repositories = document.querySelector("#repositories");
const repoName = document.querySelector("#repoName");
const repoDescription = document.querySelector("#repoDescription");
const repoLanguage = document.querySelector("#repoLanguage");
const repoStars = document.querySelector("#repoStars");
const repoForks = document.querySelector("#repoForks");
const repoLink = document.querySelector("#repoLink");
import { validNom } from './pageRecherch.js'
import { ajouterShortlist } from './shortlist.js';
console.log(bio);
 let condidate = null;
  export function afficherinfo(user){
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
 

 const params = new URLSearchParams(window.location.search);
const username = params.get('username');
async function rechercherUser(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`,{
    headers: {
      
        Accept: "application/vnd.github+json"
    }
});
          
        if (response.status === 404) {
            msgerror.classList.remove("hidden");
            return;
        }

        if (response.status === 403) {
            console.log("Limite de requêtes GitHub dépassée");
            return;
        }

        if (!response.ok) {
            return;
        }
        msgerror.classList.add("hidden");
        const data = await response.json();
        afficherinfo(data);
        afficherrepo();

    } catch (error) {
        console.log(error.message);
    }
}
 async function afficherrepo(){
  try{
 const response= await fetch(`https://api.github.com/users/${username}/repos?per_page=100&page=1`,{
    headers: {
       
        Accept: "application/vnd.github+json"
    }
})
 const repo = await response.json();
    console.log(repo);
     reposTotal.textContent = repo.length;
     repo.forEach(repo => {

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
catch (error) {
        console.log(error.message);
    }

 }
 rechercherUser(username);
afficherrepo();
 btnaddShortlist.addEventListener('click', function(){
btnaddShortlist.textContent='conddidat ajouté'
   ajouterShortlist(condidate)
    

})

const search=document.querySelector('#nomsearch')
const form=document.querySelector('.form')
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!validNom()) {
        return;
    }
    const username = search.value.trim();

    window.location.href = `profil.html?username=${username}`;
});