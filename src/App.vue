<script setup>
import FlashcardList from './components/FlashcardList.vue'
import AdvicePage from './components/AdvicePage.vue'
import { ref } from 'vue'

const showAdvice = ref(false)
const selectedStage = ref(null)
const showToast = ref(false)
const showSplash = ref(true)
const userName = ref('')

function handleProceed(stage) {
  if (!stage) {
    showToast.value = true
    setTimeout(() => showToast.value = false, 2000)
    return
  }
  selectedStage.value = stage
  showAdvice.value = true
}
function handleBack() {
  showAdvice.value = false
  selectedStage.value = null
}
function handleSplash() {
  if (!userName.value.trim()) {
    showToast.value = true
    setTimeout(() => showToast.value = false, 2200)
    return
  }
  showSplash.value = false
}

// Force cache invalidation with build timestamp
console.debug('Build timestamp:', __BUILD_TIMESTAMP__)
</script>
<template>
  <div class="container">
    <template v-if="showSplash">
      <div class="splash">
        <h1>Hi, how may I address you?</h1>
        <input
          v-model="userName"
          class="name-input"
          type="text"
          placeholder="(your name)"
          @keyup.enter="handleSplash"
        />
        <button class="splash-btn" @click="handleSplash">Click here</button>
      </div>
      <transition name="fade">
        <div v-if="showToast" class="toast">A name is important, because it is your identity - and you are important. What may I call you?</div>
      </transition>
    </template>
    <template v-else-if="!showAdvice">
      <h1>How do you feel about your current situation<span v-if="userName">, {{ userName }}</span>?</h1>
      <FlashcardList @proceed="handleProceed" />
      <transition name="fade">
        <div v-if="showToast" class="toast">Please select a stage before proceeding.</div>
      </transition>
    </template>
    <template v-else>
      <AdvicePage :stage="selectedStage" :name="userName" @back="handleBack" />
    </template>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(1rem, 4vw, 2rem);
  font-family: system-ui, sans-serif;
  position: relative;
  background-color: #1a1a1a;
  min-height: 100vh;
  color: #fff;
  width: 100%;
}
.splash {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  gap: 2.5rem;
}
.splash h1 {
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  color: #43cea2;
  margin-bottom: 1.5rem;
  text-align: center;
  padding: 0 1rem;
}
.name-input {
  font-size: 1.3rem;
  padding: 1rem 2.2rem;
  border-radius: 14px;
  border: 2px solid #43cea2;
  outline: none;
  background: #2a2a2a;
  color: #fff;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 12px rgba(67,206,162,0.15);
  text-align: center;
  transition: all 0.2s;
}
.name-input:focus {
  border: 2px solid #185a9d;
}
.splash-btn {
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 12px;
  background: linear-gradient(90deg, #43cea2 0%, #185a9d 100%);
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(67,206,162,0.12);
}
.splash-btn:hover {
  background: #185a9d;
}
.toast {
  position: fixed;
  left: 50%;
  bottom: 2.5rem;
  transform: translateX(-50%);
  background: #222;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.18);
  font-size: 1.1rem;
  opacity: 0.95;
  z-index: 1000;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
