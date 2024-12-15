<script setup>
import { ref, onMounted } from 'vue'
import { fetchCocktails } from './cocktailService'
import CocktailCard from './components/CocktailCard.vue'

const cocktails = ref(null)
const error = ref(null)
const loading = ref(true)

// On souhaite afficher 3 cocktails aléatoires qui changent à chaque accès à la page
// J'appelle ma fonction asynchrone `fetchCocktails` directement dans `onMounted`
onMounted(async () => {
  try {
    cocktails.value = await fetchCocktails()
  } catch (err) {
    // J'intercepte une éventuelle erreur.
    error.value = 'No more cocktails...'
    console.error(err)
  } finally {
    // Si tout est ok, je passe mon statut `loading` à false.
    loading.value = false
  }
})
</script>

<template>
  <!-- J'affiche un message personnalisé tant que ma requête n'est pas résolue -->
  <p v-if="loading" class="font-limelight text-center mt-10">Cocktails are loading...</p>
  <div
    v-else
    class="animate-fadeIn max-w-screen-xl p-10 mx-auto my-4 overflow-scroll flex flex-col gap-3 lg:grid lg:grid-rows-app lg:grid-cols-2 lg:gap-5"
  >
    <!-- Une fois la requête terminée, je loop sur mon tableau de 3 cocktails
  et j'envoie la data à mon composant `CocktailCard`. -->
    <!-- La prop `first-elem` va essentiellement me servir pour du conditional rendering et des styles. -->
    <CocktailCard
      v-for="(cocktail, index) in cocktails"
      :key="cocktail.idDrink"
      :cocktail="cocktail"
      :first-elem="index === 0"
    />
  </div>
  <p v-if="error">{{ error }}</p>
</template>
