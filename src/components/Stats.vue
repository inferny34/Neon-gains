<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const stats = [
  { label: 'Clients Transformés', value: 847, suffix: '+' },
  { label: 'Séances Réalisées', value: 12450, suffix: '+' },
  { label: 'Taux de Satisfaction', value: 98, suffix: '%' },
  { label: 'Note Moyenne', value: 4.9, suffix: '/5' }
]

const statsSection = ref(null)
const triggered = ref(false)
const displayValues = ref(stats.map(() => 0))

const animateValue = (index, end, duration) => {
  let start = 0
  const range = end - start
  let current = start
  const increment = end > 200 ? 50 : 1 // Faster increments for bigger numbers or decimals handling
  const stepTime = Math.abs(Math.floor(duration / (range / increment)))
  
  const timer = setInterval(() => {
    current += increment
    if (current >= end) {
      current = end
      clearInterval(timer)
    }
    // Handle decimal for 4.9
    if (index === 3) {
       displayValues.value[index] = Math.min(current, end).toFixed(1)
    } else {
       displayValues.value[index] = Math.min(current, end)
    }
  }, 10) // Fixed speed for simplicity
}

const handleScroll = () => {
  if (!statsSection.value || triggered.value) return
  
  const rect = statsSection.value.getBoundingClientRect()
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    triggered.value = true
    stats.forEach((stat, index) => {
      animateValue(index, stat.value, 2000)
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section ref="statsSection" class="py-16 bg-neon-cyan/5 border-t border-b border-neon-cyan/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="(stat, index) in stats" :key="index" class="p-4">
          <div class="text-3xl md:text-5xl font-bold font-display text-white mb-2 text-glow">
            {{ displayValues[index] }}{{ stat.suffix }}
          </div>
          <p class="text-neon-cyan uppercase tracking-widest text-sm font-bold">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
