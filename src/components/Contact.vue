<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  goal: 'Hypertrophie',
  message: ''
})

const submitForm = () => {
  alert('Message envoyé à Max ! Prépare-toi à souffrir (positivement).')
  form.value = { name: '', email: '', goal: 'Hypertrophie', message: '' }
}
</script>

<template>
  <section id="contact" class="relative py-24 bg-gradient-to-b from-bg-dark to-black overflow-hidden">
    <!-- Overlay Glow -->
    <div class="absolute inset-0 bg-neon-cyan/5 pointer-events-none"></div>
    
    <div class="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
      <div class="text-center mb-12">
        <h2 class="text-5xl md:text-6xl font-display font-black text-white mb-4 uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          Prêt à <span class="text-neon-cyan">Commencer ?</span>
        </h2>
        <p class="text-xl text-gray-300">Rejoins les 800+ athlètes qui ont transformé leur physique.</p>
      </div>
      
      <form @submit.prevent="submitForm" class="space-y-6 bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 shadow-2xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="group">
            <label class="block text-neon-cyan text-sm font-bold mb-2 uppercase">Nom</label>
            <input 
              v-model="form.name"
              type="text" 
              required
              class="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_#00f0ff] transition-all"
              placeholder="Ton nom de guerrier"
            />
          </div>
          <div class="group">
            <label class="block text-neon-cyan text-sm font-bold mb-2 uppercase">Email</label>
            <input 
              v-model="form.email"
              type="email" 
              required
              class="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_#00f0ff] transition-all"
              placeholder="email@exemple.com"
            />
          </div>
        </div>
        
        <div>
          <label class="block text-neon-cyan text-sm font-bold mb-2 uppercase">Objectif Principal</label>
          <select 
            v-model="form.goal"
            class="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_#00f0ff] transition-all appearance-none"
          >
            <option>Hypertrophie Musculaire</option>
            <option>Perte de Gras / Sèche</option>
            <option>Force Athlétique</option>
            <option>Préparation Compétition</option>
          </select>
        </div>
        
        <div>
           <label class="block text-neon-cyan text-sm font-bold mb-2 uppercase">Message</label>
           <textarea 
             v-model="form.message"
             rows="4"
             class="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_#00f0ff] transition-all"
             placeholder="Parle-moi de tes défis..."
           ></textarea>
        </div>
        
        <button 
          type="submit"
          class="w-full py-4 text-xl font-bold font-display uppercase tracking-widest bg-gradient-to-r from-neon-cyan to-neon-blue-500 text-black hover:scale-[1.02] hover:shadow-[0_0_20px_#00f0ff] transition-all transform duration-200"
        >
          Lancer ma Transformation
        </button>
      </form>
      
      <div class="mt-12 text-center text-gray-400 space-y-2">
        <p>Email: <a href="mailto:contact@neongains.fit" class="text-neon-cyan hover:underline">contact@neongains.fit</a></p>
        <div class="flex justify-center gap-6 mt-4">
          <a href="#" class="hover:text-neon-magenta transition-colors">Instagram</a>
          <a href="#" class="hover:text-neon-magenta transition-colors">TikTok</a>
          <a href="#" class="hover:text-neon-magenta transition-colors">YouTube</a>
        </div>
      </div>
    </div>
  </section>
</template>
