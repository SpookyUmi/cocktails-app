<template>
  <div :class="'text-' + textAlign">
    <h3 :class="'font-limelight uppercase text-3xl drop-shadow-md ' + titleSize">
      {{ cocktail.strDrink }}
    </h3>
    <p
      v-if="cocktailIngredients && cocktailIngredients.length"
      :class="'uppercase font-medium drop-shadow-md ' + ingredientsSize"
    >
      {{ cocktailIngredients.join(' · ') }}
    </p>
    <p v-else>Les ingrédients sont en cours de chargement</p>
  </div>
</template>

<script>
export default {
  props: {
    cocktail: {
      type: Object,
      required: true,
    },
    cocktailIngredients: {
      type: Array,
      required: true,
    },
    textAlign: {
      type: String,
      required: true,
    },
    titleSize: {
      type: String,
      required: true,
    },
    ingredientsSize: {
      type: String,
      required: true,
    },
  },
}
</script>
