<script setup>
import { ref } from 'vue'

const testimonials = [
  { name: 'Thomas D.', result: '-15kg en 12 semaines', quote: "La méthode Max Steele a changé ma vie. Je ne suis plus le même homme.", imageComp: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1000&auto=format&fit=crop', color: 'neon-green' },
  { name: 'Julie M.', result: '+5kg de muscle', quote: "Enfin un programme qui donne de vrais résultats sans blabla.", imageComp: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop', color: 'neon-magenta' },
  { name: 'Karim S.', result: 'Transformation Athlète', quote: "Préparation physique au top pour ma saison. Merci Coach !", imageComp: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop', color: 'neon-cyan' }
]

const currentIndex = ref(0)
const next = () => { currentIndex.value = (currentIndex.value + 1) % testimonials.length }
const prev = () => { currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length }
</script>

<template>
  <section id="transformations" class="py-24 bg-bg-dark relative overflow-hidden">
    <!-- Background Particles/Lines -->
    <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-white uppercase">
          Les Résultats <span class="text-neon-magenta">Parlent</span>
        </h2>
      </div>

      <div class="relative bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-8 overflow-hidden min-h-[500px] flex items-center">
        <!-- Decoration Borders -->
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-green via-neon-cyan to-neon-magenta"></div>
        <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-magenta via-neon-cyan to-neon-green"></div>

        <button @click="prev" class="absolute left-4 z-20 text-white hover:text-neon-cyan transition-colors p-2 bg-black/50 rounded-full">
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
        </button>

        <div class="w-full flex-1 relative h-full flex items-center justify-center">
          <transition-group name="fade" tag="div" class="w-full h-full relative flex items-center justify-center">
             <div 
               v-for="(item, index) in testimonials" 
               v-show="index === currentIndex"
               :key="item.name"
               class="absolute w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 px-8 md:px-16"
             >
               <!-- Image placeholder simulating Before/After split -->
               <div class="w-full md:w-1/2 relative rounded-xl overflow-hidden border-2 shadow-[0_0_20px_rgba(0,0,0,0.5)]" :class="`border-${item.color}`">
                 <img :src="item.imageComp" alt="Transformation" class="w-full h-80 object-cover" />
                 <div class="absolute bottom-4 left-4 bg-black/80 px-3 py-1 text-xs font-bold text-white border-l-2 border-neon-cyan">AVANT / APRÈS</div>
               </div>
               
               <div class="w-full md:w-1/2 text-left">
                 <h3 class="text-3xl font-display font-bold text-white mb-2">{{ item.name }}</h3>
                 <div class="text-xl font-bold mb-6" :class="`text-${item.color}`">{{ item.result }}</div>
                 <div class="relative">
                   <span class="absolute -top-4 -left-4 text-6xl text-gray-700 opacity-50 font-serif">"</span>
                   <p class="text-gray-300 italic text-lg relative z-10">{{ item.quote }}</p>
                 </div>
               </div>
             </div>
          </transition-group>
        </div>

        <button @click="next" class="absolute right-4 z-20 text-white hover:text-neon-cyan transition-colors p-2 bg-black/50 rounded-full">
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      
      <!-- Dots -->
      <div class="flex justify-center gap-3 mt-8">
        <button 
          v-for="(_, idx) in testimonials" 
          :key="idx" 
          @click="currentIndex = idx"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="idx === currentIndex ? 'bg-neon-cyan scale-125 shadow-[0_0_10px_#0ff]' : 'bg-gray-600 hover:bg-gray-400'"
        ></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
