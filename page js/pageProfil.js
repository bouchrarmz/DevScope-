

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
//repo
const reposTotal = document.querySelector("#reposTotal");
const repositories = document.querySelector("#repositories");
const repoName = document.querySelector("#repoName");
const repoDescription = document.querySelector("#repoDescription");
const repoLanguage = document.querySelector("#repoLanguage");
const repoStars = document.querySelector("#repoStars");
const repoForks = document.querySelector("#repoForks");
const repoLink = document.querySelector("#repoLink");


console.log(bio);

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
     const candidat = {
        username: user.login,
        name: user.name,
        avatar_url: user.avatar_url,
        statut: "À contacter",
        ratinge: 0
    };
 }
 const params = new URLSearchParams(window.location.search);

const username = params.get('username');

fetch(`https://api.github.com/users/${username}`)
.then(response => {
    if (!response.ok) {
        throw new Error("Utilisateur introuvable");
    }
    return response.json();
})
.then(data => {
    console.log(data);
    afficherinfo(data);
})
.catch(error => {
    console.log(error.message);
});
fetch(`https://api.github.com/users/${username}/repos`)
.then(response => response.json())
.then(data => {
    console.log(data);
     reposTotal.textContent = data.length;
     data.forEach(repo => {

    const card = document.createElement("div");
    card.className = "bg-[#1b2232] border border-gray-700 rounded-2xl p-5 hover:border-cyan-500";
    const title = document.createElement("h3");
    title.className = "text-lg font-bold text-cyan-400";
    const description = document.createElement("p");
    description.className = "text-gray-400 mt-4";
    const link = document.createElement("a");
    link.href = repo.html_url;
    link.target = "_blank";
    link.textContent = "Voir le repository ↗";

    title.textContent = repo.name;
    description.textContent = repo.description || "Pas de description";

    card.append(title, description,link);

    repositories.append(card);

});
})
.catch(error => {
    console.log(error.message);
});
btnaddShortlist.addEventListener('click', function(){

})