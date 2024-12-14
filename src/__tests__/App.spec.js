import { flushPromises, mount } from '@vue/test-utils'
import App from '../App.vue'
import { describe, vi, it, expect } from 'vitest'
import { fetchCocktails } from '../cocktailService'

// Je mock ma fonction `fetchCocktails` pour concentrer mon test sur le composant Vue
vi.mock('../cocktailService', () => ({
  fetchCocktails: vi.fn(),
}))

describe('App', () => {
  it('affiche les cocktails suite à la requête API', async () => {
    // Mock d'une réponse réussie de `fetchCocktails`
    const mockCocktails = [
      { idDrink: '1', strDrink: 'Mojito', strDrinkThumb: 'mojito.jpg' },
      { idDrink: '2', strDrink: 'Martini', strDrinkThumb: 'martini.jpg' },
      { idDrink: '3', strDrink: 'Margarita', strDrinkThumb: 'margarita.jpg' },
    ]

    fetchCocktails.mockResolvedValueOnce(mockCocktails)

    const wrapper = mount(App)

    // J'attends que les promesses sont résolues avant de vérifier l'état du DOM
    await flushPromises()

    // Les cocktails doivent être correctement affichés, sans message de loading
    expect(wrapper.text()).not.toContain('Cocktails en préparation...')
    expect(wrapper.text()).toContain('Mojito')
    expect(wrapper.text()).toContain('Martini')
    expect(wrapper.text()).toContain('Margarita')

    // Je vérifie que le nombre d'éléments affichés dans mon DOM correspond bien au nombre de cocktails
    const cocktailItems = wrapper.findAll('section')
    expect(cocktailItems.length).toBe(mockCocktails.length)
  })

  it("affiche un message d'erreur en cas d'échec de la requête", async () => {
    fetchCocktails.mockRejectedValueOnce(new Error('Le bar est à sec...'))

    const wrapper = mount(App)

    await flushPromises()

    expect(wrapper.text()).toContain('Le bar est à sec...')
  })
})
