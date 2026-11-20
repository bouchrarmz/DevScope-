
const api_URL='https://6af4757155a1de7dcf041588.mockapi.io/candidates'
//fonction de git
// import { getCache,setCache } from './cache.js';
  export async function rechercherUser(username) {
    const response = await fetch(
        `https://api.github.com/users/${username}`,
         
    );
    if (!response.ok) {
        throw new Error(`Erreur HTTP ${response.status}`);
    }
    return await response.json();
}
//git 
export async function chargerRepos(username) {
    const response = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&page=1`,
    );

    if (!response.ok) {
        throw new Error(`Erreur HTTP ${response.status}`);
    }

    return await response.json();
}
// put pour la modifiction 
export async function modifierC(id, tache) {

    const reponse = await fetch(`https://6af4757155a1de7dcf041588.mockapi.io/candidates/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tache)
    });

    if (!reponse.ok) {
        throw new Error(`Erreur HTTP ${reponse.status}`);
    }

    return await reponse.json();
}
export async function deletC(id) {

    const reponse = await fetch(`https://6af4757155a1de7dcf041588.mockapi.io/candidates/${id}`, {
        method: "DELETE",
    });
    if (!reponse.ok) {
        throw new Error(`Erreur HTTP ${reponse.status}`);
    }
    return true;
}
//  export async function fetchdata(username) {
//     const results = await Promise.all([
//         fetch(`${api_URL}/${username}`, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         }),

//         fetch(`${api_URL}/${username}/repos?per_page=100&page=1`, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         })
//     ]);

//     if (!results[0].ok || !results[1].ok) {
//         throw new Error("Erreur lors de la récupération des données");
//     }

//     const profil = await results[0].json();
//     const repos = await results[1].json();

//     const data= { profil, repos };
//      setCache(username, data);
//      return data ;
// }