import { vi, describe, it, expect, beforeEach } from 'vitest'
import { fetchCocktails } from '../cocktailService'
import axios from 'axios'

// Je m'assure que le mock d'axios est bien réalisé avant de lancer les tests avec `beforeEach`
beforeEach(() => {
  vi.mock('axios')
})

// Tests pour ma fonction fetchCocktails
describe('fetchCocktails', () => {
  it('récupérer un array contenant un cocktail', async () => {
    // Après analyse de la réponse que nous renvoie l'API, je mock un objet avec la même structure
    axios.get.mockResolvedValueOnce({
      data: {
        drinks: [
          {
            idDrink: '178334',
            strDrink: 'Death in the Afternoon',
            strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/y7s3rh1598719574.jpg',
          },
        ],
      },
    })

    const cocktails = await fetchCocktails(1)

    // Je vérifie qu'on obtient bien un cocktail et que les données récupérées sont cohérentes
    expect(cocktails.length).toBe(1)
    expect(cocktails[0].strDrink).toBe('Death in the Afternoon')
    expect(cocktails[0].strDrinkThumb).toBe(
      'https://www.thecocktaildb.com/images/media/drink/y7s3rh1598719574.jpg',
    )
  })

  it('renvoie une erreur lorsque la requête échoue', async () => {
    axios.get.mockRejectedValueOnce(new Error('Erreur API'))

    try {
      await fetchCocktails(1)
    } catch (error) {
      expect(error.message).toBe('Erreur API')
    }
  })
})
