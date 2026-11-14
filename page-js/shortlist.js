import { api } from './confIg.js';
const container= document.querySelector('.container')
export async function ajouterShortlist(candidate) {
     try {
        const response = await fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(candidate)
        });
        if (!response.ok) {
            throw new Error("Erreur lors de l'ajout du candidat");
        }
        const result = await response.json();

        console.log(result);

    } catch (error) {
        console.log(error.message);
    }
}
export async function afficherShortlist() {
     try {
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error("Erreur lors de l'ajout du candidat");
        }
        console.log(response.ok)
        const result = await response.json();
        console.log("eee")
        console.log(result);
        result.forEach(res => {
            const card = document.createElement("div");
            const rating = Math.max(0, Math.min(5, Number(res.rating) || 0));
             const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
             const dateAjout = new Date(res.date).toLocaleDateString("fr-FR");

        card.className = `
            bg-[#101321] border border-gray-800
            rounded-3xl p-5 md:p-6
            flex flex-col md:flex-row
            items-center justify-between gap-5
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
                    px-4 py-2 rounded-xl"
                    data-action="edit"
                    data-id="${res.id}">
                    ✎ Modifier
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