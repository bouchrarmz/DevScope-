
import { api } from './confIg.js';
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
