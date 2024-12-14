<script setup>
import { computed } from 'vue'

// Je définis mes props
const props = defineProps({
  cocktail: {
    type: Object,
    required: true,
  },
  firstElem: {
    type: Boolean,
    required: true,
  },
})

// J'ai choisi de me servir des ingrédients de l'object `cocktail`.
// Chaque objet contient 15 key `strIngredientsN`, dont la valeur est soit une string, soit `null`.
// Je vérifie toutes les valeurs, de manière dynamique en incrémentant la partie variable de la key `strIngredient``
// Je ne conserve que les valeurs existantes.
const cocktailIngredients = computed(() =>
  Array.from({ length: 15 }, (_, i) => props.cocktail[`strIngredient${i + 1}`]).filter(Boolean),
)
</script>

<template>
  <section :class="sectionClass">
    <article :class="articleClass">
      <div :class="divStructureClass">
        <h3 :class="titleClass">
          {{ cocktail.strDrink }}
        </h3>
        <p v-if="cocktailIngredients && cocktailIngredients.length" :class="ingredientsClass">
          {{ cocktailIngredients.join(' · ') }}
        </p>
        <p v-else>Les ingrédients sont en cours de chargement...</p>
      </div>
      <p v-if="firstElem" class="italic lg:mt-4 drop-shadow-md line--truncate">
        "{{ cocktail.strInstructions }}"
      </p>
      <img
        v-if="!firstElem"
        :src="cocktail.strDrinkThumb"
        :alt="cocktail.strDrink"
        :class="imageClass"
      />
    </article>

    <img
      v-if="firstElem"
      :src="cocktail.strDrinkThumb"
      :alt="cocktail.strDrink"
      :class="imageClass"
    />

    <p
      v-if="!firstElem"
      class="italic px-4 mb-8 drop-shadow-md line--truncate lg:p-4 lg:pb-0 lg:w-full"
    >
      "{{ cocktail.strInstructions }}"
    </p>
  </section>
</template>

<script>
export default {
  // Pour éviter des répétitions de style et d'éléments, j'ai choisi cette syntaxe qui me
  // renvoie des tableaux de classes CSS de manière conditionnelle en fonction de `firstElem`.
  // Je me sers de `computed` pour traquer les updates de `firstElem`.
  // On aurait aussi pu se servir d'un `v-if` & `v-else`, bien que moins lisible dans ce cas.
  computed: {
    sectionClass() {
      return [
        'rounded-sm backdrop-blur-lg bg-transparent-peach shadow-xl overflow-hidden flex',
        this.firstElem
          ? 'flex-col-reverse lg:flex-row lg:justify-end lg:col-span-2 lg:w-[100%] lg:max-h-[400px]'
          : 'flex-col lg:w-full lg:h-full',
      ]
    },
    articleClass() {
      return [
        'w-full',
        this.firstElem
          ? 'lg:text-right py-8 px-4'
          : 'text-left flex flex-col-reverse lg:text-left lg:grid lg:grid-cols-article',
      ]
    },
    imageClass() {
      return [
        'w-full object-cover',
        this.firstElem ? 'lg:w-[400px] max-h-[400px]' : 'lg:w-[200px] lg:justify-self-end lg:mb-4',
      ]
    },
    divStructureClass() {
      return this.firstElem ? 'lg:text-right' : 'text-left pt-8 px-4 lg:p-4'
    },
    titleClass() {
      return [
        'font-limelight uppercase text-3xl drop-shadow-md',
        this.firstElem ? 'lg:text-5xl xl:text-6xl' : 'xl:text-4xl',
      ]
    },
    ingredientsClass() {
      return ['uppercase font-medium drop-shadow-md', !this.firstElem && 'text-sm']
    },
  },
}
</script>
