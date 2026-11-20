const DURATION = 10 * 60 * 1000; 
// Enregistrer : la donnée + la date d'enregistrement
export function setCache(key, user) {
  localStorage.setItem(key, JSON.stringify({ data: user, savedAt: Date.now() }));
}

// Lire : renvoie la donnée si elle existe et a moins de 10 minutes, sinon null
export function getCache(key) {
  const entry = JSON.parse(localStorage.getItem(key)); // null si la clé n'existe pas
  if (entry && Date.now() - entry.savedAt < DURATION) {
    return entry.data;
  }
  return null;
}
