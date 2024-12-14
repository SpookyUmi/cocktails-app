import axios from 'axios'

// Fonction avec requête HTTP pour récupérer un nombre `count` de cocktails aléatoires.
export async function fetchCocktails(count = 3) {
  // L'API TheCocktailDB ne proposant pas de récupérer un nombre `n` de cocktails en
  // une seule requête, il faut effectuer plusieurs calls. Ici j'ai choisi de me
  // servir d'un tableau de promesses basé sur `count`.
  // Note: on aurait aussi pu ajouter un map(), ou utiliser une boucle `for` asynchrone.
  const promises = Array.from({ length: count }, async () => {
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    return response.data.drinks[0]
  })
  return Promise.all(promises)
}
