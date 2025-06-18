<script setup>
import { ref } from 'vue'
const emit = defineEmits(['proceed'])

const stages = [
  {
    name: 'Precontemplation',
    front: 'I feel indifferent or fine.',
    signs: [
      'Precontemplation Stage',
      'I feel like I don\'t have a problem or don\'t need to change.',
      'I feel comfortable with my current behavior.',
      'I feel that change is not necessary for me right now.'
    ],
    advice: 'Increase awareness of the need for change. Reflect on the pros and cons of your behavior.'
  },
  {
    name: 'Contemplation',
    front: 'I feel unsure, I think I want to do things differently but not sure how or if I should',
    signs: [
      'Contemplation Stage',
      'I feel uncertain about changing.',
      'I feel like I should change, but I\'m not sure how or when.',
      'I feel both the benefits and barriers of changing.'
    ],
    advice: 'Weigh the benefits and barriers. Consider what motivates you to change.'
  },
  {
    name: 'Preparation',
    front: 'I\'m ready for a change, maybe a little scared',
    signs: [
      'Preparation Stage',
      'I feel ready to make a change soon.',
      'I feel like I\'m making plans or small steps toward change.',
      'I feel hopeful and a bit nervous about starting.'
    ],
    advice: 'Set clear, achievable goals. Make a concrete plan and seek support.'
  },
  {
    name: 'Action',
    front: 'I\'m taking steps to make changes, it\'s not easy, but I can do it!',
    signs: [
      'Action Stage',
      'I feel proud that I\'m making changes.',
      'I feel challenged but motivated to keep going.',
      'I feel like I\'m actively working on new habits.'
    ],
    advice: 'Stay focused and committed. Celebrate progress and manage obstacles.'
  },
  {
    name: 'Maintenance',
    front: 'I think I\'m doing well, this is the new Me!',
    signs: [
      'Maintenance Stage',
      'I feel confident in my new behavior.',
      'I feel determined to avoid slipping back.',
      'I feel like my new habits are becoming part of my life.'
    ],
    advice: 'Continue reinforcing new habits. Plan for challenges and reward yourself.'
  },
  {
    name: 'Termination',
    front: 'I am fully confident of the new me. I think I can help others too.',
    signs: [
      'Termination Stage',
      'I feel no temptation to return to my old ways.',
      'I feel strong and in control of my choices.',
      'I feel like this change is now a natural part of who I am.'
    ],
    advice: 'Recognize your achievement. Support others and reflect on your journey.'
  }
]

const flipped = ref(Array(stages.length).fill(false))

function flipCard(idx) {
  // Flip only the selected card, reset all others
  flipped.value = flipped.value.map((_, i) => i === idx ? !flipped.value[idx] : false)
}

function proceed(stage) {
  emit('proceed', stage)
}
</script>

<template>
  <div class="flashcard-list">
    <div class="flashcards">
      <div
        v-for="(stage, idx) in stages"
        :key="stage.name"
        class="flashcard"
        :class="{ flipped: flipped[idx] }"
        @click="flipCard(idx)"
      >
        <div class="flashcard-front">
          <h2>{{ stage.front }}</h2>
        </div>
        <div class="flashcard-back">
          <div class="card-back-title">{{ stage.signs[0] }}</div>
          <ul>
            <li v-for="sign in stage.signs.slice(1)" :key="sign">{{ sign }}</li>
          </ul>
        </div>
      </div>
    </div>
    <button 
      class="proceed-btn" 
      @click="proceed(stages.find((_,i)=>flipped[i]))" 
      :disabled="!flipped.includes(true)"
    >
      Proceed
    </button>
  </div>
</template>

<style scoped>
.flashcard-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.flashcards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
}

.flashcard {
  position: relative;
  aspect-ratio: 16/10;
  cursor: pointer;
  width: 100%;
}

.flashcard-front,
.flashcard-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 3vw, 1.5rem);
  border-radius: 18px;
  transition: transform 0.6s, opacity 0.6s;
  text-align: center;
  overflow: auto;
}

.flashcard-front {
  background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%);
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
  opacity: 1;
  transform: rotateY(0);
}

.flashcard-back {
  background: linear-gradient(135deg, #f7971e 0%, #ffd200 100%);
  color: #333;
  opacity: 0;
  transform: rotateY(180deg);
}

.flashcard.flipped .flashcard-front {
  opacity: 0;
  transform: rotateY(180deg);
}

.flashcard.flipped .flashcard-back {
  opacity: 1;
  transform: rotateY(0);
}

.flashcard-front h2 {
  font-size: clamp(1rem, 3vw, 1.2rem);
  margin: 0;
}

.flashcard-back ul {
  list-style-position: inside;
  padding: 0;
  margin: 0;
  text-align: left;
  width: 100%;
}

.flashcard-back li {
  margin-bottom: 0.6em;
  font-size: clamp(0.8rem, 2.5vw, 0.9rem);
  line-height: 1.4;
  padding-left: 1em;
  text-indent: -1em;
}

.card-back-title {
  font-size: clamp(0.9rem, 2.8vw, 1.1rem);
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
}

.proceed-btn {
  margin-top: 2rem;
  padding: 0.95rem 2.5rem;
  font-size: 1.18rem;
  border: none;
  border-radius: 12px;
  background: linear-gradient(90deg, #43cea2 0%, #185a9d 100%);
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
}

.proceed-btn:disabled {
  background: #bdbdbd;
  cursor: not-allowed;
}

@media (max-width: 1024px) {
  .flashcards {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 700px) {
  .flashcards {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .flashcard {
    aspect-ratio: 16/9;
  }
}

@media (max-width: 768px) {
  .flashcards {
    gap: 1.5rem;
  }
  
  .proceed-btn {
    margin-top: 2rem;
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
}
</style>
