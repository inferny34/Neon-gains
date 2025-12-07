<script setup>
const steps = [
  { id: 1, title: 'ANALYSE', desc: 'Bilan morphologique complet, objectifs et délais.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', color: 'text-neon-cyan', border: 'border-neon-cyan' },
  { id: 2, title: 'PROGRAMME', desc: 'Plan d\'entraînement sur-mesure et nutrition calculée.', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', color: 'text-neon-green', border: 'border-neon-green' },
  { id: 3, title: 'EXÉCUTION', desc: 'Suivi hebdomadaire et ajustements en temps réel.', icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: 'text-neon-magenta', border: 'border-neon-magenta' },
  { id: 4, title: 'RÉSULTATS', desc: 'Objectifs atteints et autonomie acquise.', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', color: 'text-neon-purple', border: 'border-neon-purple' }
]
</script>

<template>
  <section id="method" class="py-24 bg-bg-darker relative overflow-hidden">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 relative">
      <h2 class="text-4xl md:text-5xl font-display font-bold text-center text-white mb-20 uppercase">
        La Méthode <span class="text-neon-cyan">Neon Gains</span>
      </h2>

      <!-- Timeline Line -->
      <div class="absolute left-1/2 transform -translate-x-1/2 top-40 bottom-20 w-1 bg-gray-800 hidden md:block">
        <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-purple opacity-50"></div>
      </div>

      <div class="space-y-12 md:space-y-24">
        <div 
          v-for="(step, index) in steps" 
          :key="step.id"
          class="relative flex flex-col md:flex-row items-center justify-between group"
          :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
        >
          <!-- Text Content -->
          <div class="w-full md:w-5/12 text-center md:text-right" :class="index % 2 === 0 ? 'md:text-right' : 'md:text-left'">
            <h3 class="text-2xl font-display font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">{{ step.title }}</h3>
            <p class="text-gray-400">{{ step.desc }}</p>
          </div>

          <!-- Icon / Node -->
          <div class="relative z-10 w-20 h-20 rounded-full bg-bg-dark border-4 flex items-center justify-center my-4 md:my-0 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300" :class="step.border">
            <div class="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20"></div>
            <svg class="w-8 h-8" :class="step.color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="step.icon" />
            </svg>
            <div class="absolute -top-10 text-4xl font-black text-white/5 font-display">{{ step.id }}</div>
          </div>

          <!-- Spacer for other side -->
          <div class="w-full md:w-5/12"></div>
        </div>
      </div>
    </div>
  </section>
</template>
