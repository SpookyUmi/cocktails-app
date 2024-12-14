import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CocktailCard from '../CocktailCard.vue'

describe('CocktailCard', () => {
  it('monte le composant correctement', () => {
    // Je monte mon composant `CocktailCard` et mock les props
    const wrapper = mount(CocktailCard, {
      props: {
        cocktail: {
          idDrink: '178334',
          strDrink: 'Death in the Afternoon',
          strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/y7s3rh1598719574.jpg',
        },
      },
    })

    expect(wrapper.props('cocktail')).toStrictEqual({
      idDrink: '178334',
      strDrink: 'Death in the Afternoon',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/y7s3rh1598719574.jpg',
    })
    expect(wrapper.text()).toContain('Death in the Afternoon')
  })
})
