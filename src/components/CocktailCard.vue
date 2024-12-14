<script setup>
import { computed } from 'vue'
import HeaderSection from './HeaderSection.vue'

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
const cocktailIngredients = computed(() =>
  Array.from({ length: 15 }, (_, i) => props.cocktail[`strIngredient${i + 1}`]).filter(Boolean),
)
</script>

<template>
  <section :class="sectionClass">
    <article :class="articleClass">
      <HeaderSection
        :cocktail="cocktail"
        :cocktail-ingredients="cocktailIngredients"
        :text-align="firstElem ? 'right' : 'left pt-8 px-4 lg:p-4'"
        :title-size="firstElem ? 'lg:text-5xl xl:text-6xl' : 'xl:text-4xl'"
        :ingredients-size="firstElem ? '' : 'text-sm'"
      />
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
  },
}
</script>
