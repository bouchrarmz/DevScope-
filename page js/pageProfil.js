

 //aside
 const avatar=document.querySelector('#avatar')
const nameb=document.querySelector('#name')
const bio=document.querySelector('#bio')
const location=document.querySelector('#location')
const created=document.querySelector('#createdAt')
const reposCount=document.querySelector('#reposCount')
const followers=document.querySelector('#followers')
const following=document.querySelector('#following')
const username=document.querySelector('#username')
const linkbrofile=document.querySelector('#profileLink')
//repo
const reposTotal=document.querySelector('#reposTotal')
const container = document.querySelector("#repositories");
const template = document.querySelector("#repoTemplate");
const nomrepo = template.content.querySelector(".repo-name");
const description = template.content.querySelector(".repo-description");
const language = template.content.querySelector(".repo-language");
const stars = template.content.querySelector(".repo-stars");
const forks = template.content.querySelector(".repo-forks");
const link = template.content.querySelector(".repo-link");

 function afficherinfo(user){
    avatar.src= user.avatar_url
    nameb.textContent= user.name
    username.textContent=user.login
     bio.textContent= user.bio
     location.textContent=user.location
     created.textContent=user.created_at 
     reposCount.textContent=user.public_repos
    followers.textContent=user.followers
    following.textContent=user.following
    linkbrofile.link=user.html_url
    
 }

