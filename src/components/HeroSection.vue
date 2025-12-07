<script setup>
import { onMounted, ref } from 'vue'

const items = [
  { label: 'TRANSFORMATIONS', value: 847, suffix: '+' },
  { label: 'SATISFACTION', value: 98, suffix: '%' },
  { label: 'SUPPORT', value: 24, suffix: '/7' },
]

// Parallax effect
const handleParallax = (e) => {
  const moveX = (e.clientX - window.innerWidth / 2) * 0.01
  const moveY = (e.clientY - window.innerHeight / 2) * 0.01
  document.documentElement.style.setProperty('--move-x', `${moveX}px`)
  document.documentElement.style.setProperty('--move-y', `${moveY}px`)
}

onMounted(() => {
  window.addEventListener('mousemove', handleParallax)
})
</script>

<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-black/60 z-10"></div>
      <div 
        class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-60 scale-110 transition-transform duration-75 ease-linear"
        style="transform: translate(var(--move-x), var(--move-y)) scale(1.1);"
      ></div>
      <!-- Cyber Grid Overlay -->
      <div class="absolute inset-0 bg-cyber-grid opacity-20 z-20 pointer-events-none"></div>
    </div>

    <!-- Content -->
    <div class="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
      <h2 class="text-neon-cyan font-bold tracking-[0.2em] mb-4 animate-pulse">
        <span class="inline-block border-b-2 border-neon-cyan pb-1">NEON GAINS</span>
      </h2>
      
      <h1 class="text-5xl md:text-7xl lg:text-9xl font-display font-black text-white mb-6 uppercase tracking-tight leading-none drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
        Transforme<br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-magenta text-glow">
          Ton Corps
        </span>
      </h1>

      <p class="text-xl md:text-2xl text-gray-300 font-mono mb-10 h-8 flex justify-center items-center gap-4">
        <span class="text-neon-green">></span> Science. <span class="text-neon-magenta">Discipline.</span> Résultats.
      </p>
      
      <div class="flex flex-col md:flex-row items-center justify-center gap-6">
        <button class="group relative px-8 py-4 bg-transparent overflow-hidden rounded-none border border-neon-cyan text-white font-display font-bold text-lg tracking-wider hover:text-black transition-colors duration-300">
          <span class="absolute inset-0 w-full h-full bg-neon-cyan/0 group-hover:bg-neon-cyan transition-all duration-300 ease-out"></span>
          <span class="relative flex items-center gap-2">
            COMMENCER MAINTENANT
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
          </span>
          <div class="absolute inset-0 rounded-none shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] transition-shadow duration-300"></div>
        </button>
        
        <button class="px-8 py-4 border border-white/20 text-gray-300 font-display font-bold text-lg tracking-wider hover:bg-white/5 hover:border-white/50 transition-all">
          DÉCOUVRIR LES PROGRAMMES
        </button>
      </div>

      <!-- Stats -->
      <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-8 backdrop-blur-sm bg-black/20 rounded-xl">
        <div v-for="(stat, index) in items" :key="index" class="flex flex-col items-center">
          <span 
            class="text-4xl lg:text-5xl font-bold font-display text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            :class="index === 1 ? 'text-neon-magenta' : (index === 2 ? 'text-neon-green' : 'text-neon-cyan')"
          >
            {{ stat.value }}{{ stat.suffix }}
          </span>
          <span class="text-sm text-gray-400 uppercase tracking-widest">{{ stat.label }}</span>
        </div>
      </div>
    </div>
    
    <!-- Bottom Fade -->
    <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-dark to-transparent z-20"></div>
  </section>
</template>

<style scoped>
.text-glow {
  text-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
}
</style>
