<script setup>
import { computed } from 'vue'
const props = defineProps({
  stage: Object,
  name: String
})
const emit = defineEmits(['back'])

const advice = computed(() => {
  if (!props.stage) return ''
  switch (props.stage.name) {
    case 'Precontemplation':
      return `☀️ <b>Welcome, ${props.name}.</b><br><br>It's perfectly normal to feel comfortable where you are, and sometimes we don't see a need for change. <br><br>🌱 <b>Take a gentle moment</b> to reflect on your life and consider if there are areas where you could grow. Remember, awareness is the first step, and you are not alone in this journey.<br><br>💡 If you ever feel ready, know that support and understanding await you.`
    case 'Contemplation':
      return `🤔 <b>You are beginning to recognize</b> that change might be beneficial, and that's a courageous step.<br><br>It's okay to feel uncertain or even conflicted. <br><br>⏳ <b>Take your time</b> to weigh the pros and cons, and talk to people you trust.<br><br>🚶 Every great journey begins with a single thought, and you are already on your way.`
    case 'Preparation':
      return `📝 <b>You are preparing for change</b>, and that is something to be proud of.<br><br>Start by setting small, achievable goals and gather the resources or support you need.<br><br>🌈 <b>It's natural to feel both hopeful and nervous.</b> Trust in your ability to take the next step, and know that progress, not perfection, is what matters most.`
    case 'Action':
      return `💪 <b>You are actively making changes</b>, and that takes real strength and commitment.<br><br>🎉 <b>Celebrate your progress</b>, no matter how small, and be gentle with yourself if you stumble.<br><br>Every effort you make is a testament to your determination. Keep going, and remember that setbacks are just part of the learning process.`
    case 'Maintenance':
      return `🌻 <b>You have come so far</b>, and your new habits are becoming part of who you are.<br><br>Stay mindful of your progress and continue to nurture your growth.<br><br>🛡️ <b>If challenges arise</b>, remember how much you have already accomplished. You are resilient, and you have the wisdom to sustain these positive changes.`
    case 'Termination':
      return `🏆 <b>You have fully integrated this change</b> into your life, and you are a shining example to others.<br><br>Take a moment to honor your journey and the strength it took to get here.<br><br>🌟 <b>Share your experience</b> with those who may need encouragement, and remember that your story can inspire hope in others.`
    default:
      return ''
  }
})
</script>

<template>
  <div class="advice-rect">
    <div class="advice-content">
      <h2>Advice for {{ props.stage?.name }}</h2>
      <p class="advice-text" v-html="advice"></p>
      <button class="back-btn" @click="emit('back')">Back to Selection</button>
    </div>
    <img class="advice-logo" src="/ite.png" alt="logo" />
  </div>
</template>

<style scoped>
.advice-rect {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(120deg, #fffbe6 0%, #fff9c4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}
.advice-content {
  background: #fffde7;
  border-radius: 32px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.10);
  padding: 3.5rem 3rem 2.5rem 3rem;
  max-width: 700px;
  width: 90vw;
  min-height: 60vh;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.advice-content h2 {
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #f9a825;
  text-align: left;
  width: 100%;
}
.advice-text {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  color: #333;
  line-height: 1.8;
  width: 100%;
}
.advice-text b {
  color: #fbc02d;
}
.back-btn {
  align-self: flex-end;
  padding: 0.9rem 2.2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  background: linear-gradient(90deg, #ffe082 0%, #ffd54f 100%);
  color: #333;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(251,192,45,0.12);
}
.back-btn:hover {
  background: #ffe082;
}
.advice-logo {
  position: fixed;
  right: 2vw;
  bottom: 2vw;
  width: 64px;
  height: 64px;
  z-index: 2100;
  opacity: 0.85;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  background: #fff;
  padding: 4px;
}
</style>
