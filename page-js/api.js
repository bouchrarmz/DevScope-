 
//fonction de git
  export async function rechercherUser(username) {
    const response = await fetch(
        `https://api.github.com/users/${username}`,
         {
            headers: {
                
            },
        }
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
        {
            headers: {
                
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Erreur HTTP ${response.status}`);
    }

    return await response.json();
}
// put pour la modifiction 
// export async function modifierTache(id, tache) {
// const reponse = await fetch(`${API_TACHES}/${id}`, {
// method: "PUT",
// headers: { "Content-Type": "application/json" },
// body: JSON.stringify(tache), // un objet → du texte JSON
// });
// if (!reponse.ok) throw new Error(`Erreur HTTP ${reponse.status}`);
// return reponse.json(); 
// }

// const tacheModifiee = await modifierTache("3", {  });
