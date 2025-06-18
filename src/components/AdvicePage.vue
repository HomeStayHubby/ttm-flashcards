<script setup>
import { computed } from 'vue'
const props = defineProps({
  stage: Object
})
const emit = defineEmits(['back'])
const advice = computed(() => props.stage?.advice || '')
</script>

<template>
  <div class="advice-page">
    <h2>Advice for {{ props.stage?.name }}</h2>
    <p class="advice-text">{{ advice }}</p>
    <button class="back-btn" @click="emit('back')">Back to Flashcards</button>
  </div>
</template>

<style scoped>
.advice-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
}
.advice-text {
  font-size: 1.2rem;
  margin: 2rem 0;
  background: linear-gradient(135deg, #f7971e 0%, #ffd200 100%);
  color: #333;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
}
.back-btn {
  padding: 0.7rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #43cea2 0%, #185a9d 100%);
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
}
.back-btn:hover {
  background: #1565c0;
}
</style>
