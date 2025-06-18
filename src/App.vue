<script setup>
import FlashcardList from './components/FlashcardList.vue'
import AdvicePage from './components/AdvicePage.vue'
import { ref } from 'vue'

const showAdvice = ref(false)
const selectedStage = ref(null)

function handleProceed(stage) {
  selectedStage.value = stage
  showAdvice.value = true
}
function handleBack() {
  showAdvice.value = false
  selectedStage.value = null
}
</script>

<template>
  <div class="container">
    <template v-if="!showAdvice">
      <h1>The Transtheoretical Model (TTM) Flashcards</h1>
      <FlashcardList @proceed="handleProceed" />
    </template>
    <template v-else>
      <AdvicePage :stage="selectedStage" @back="handleBack" />
    </template>
  </div>
</template>

<style scoped>
.container {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  font-family: system-ui, sans-serif;
}
</style>
