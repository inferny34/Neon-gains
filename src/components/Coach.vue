<template>
  <section id="coach" class="relative py-20 bg-bg-darker overflow-hidden">
    <!-- Background Grid -->
    <div class="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Photo -->
        <div class="relative group">
          <div class="absolute inset-0 bg-neon-magenta/20 transform translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6"></div>
          <div class="relative border-2 border-neon-magenta overflow-hidden glow-magenta-box transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
              alt="Coach Max Steele" 
              class="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <!-- Decorative Elements -->
          <div class="absolute -bottom-6 -right-6 text-neon-cyan font-barcode text-4xl opacity-50">MAX_STEELE_V.2.0</div>
        </div>
        
        <!-- Text Content -->
        <div class="space-y-8">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white uppercase leading-tight">
            Le Coach <br />
            <span class="text-neon-magenta text-glow animate-pulse-slow">Max Steele</span>
          </h2>
          
          <p class="text-gray-300 text-lg leading-relaxed border-l-4 border-neon-cyan pl-6">
            "Je ne suis pas là pour te vendre du rêve. Je suis là pour <span class="text-neon-cyan font-bold">forcer ton évolution</span>. 
            Avec plus de 10 ans d'expérience et 500+ vies transformées, ma méthode allie science pure et discipline de fer."
          </p>
          
          <div class="grid grid-cols-2 gap-6">
             <div class="bg-black/40 p-4 border border-white/10 hover:border-neon-cyan/50 transition-colors group">
               <div class="text-neon-cyan mb-2">
                 <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
               </div>
               <h4 class="font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">EXPERTISE</h4>
               <p class="text-sm text-gray-400">Certifié NASM & Nutrition Sportive</p>
             </div>
             
             <div class="bg-black/40 p-4 border border-white/10 hover:border-neon-magenta/50 transition-colors group">
               <div class="text-neon-magenta mb-2">
                 <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
               </div>
               <h4 class="font-bold text-white mb-1 group-hover:text-neon-magenta transition-colors">ÉNERGIE</h4>
               <p class="text-sm text-gray-400">Ancien Athlète Compétition</p>
             </div>
          </div>
          
          <ul class="space-y-3 mt-6">
            <li v-for="spec in ['Hypertrophie Musculaire', 'Perte de Graisse Rapide', 'Force Athlétique', 'Bio-Hacking Nutrition']" :key="spec" class="flex items-center text-gray-300">
              <span class="w-2 h-2 bg-neon-green shadow-[0_0_5px_#39ff14] mr-3"></span>
              {{ spec }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glow-magenta-box {
  box-shadow: 0 0 15px rgba(255, 0, 110, 0.3);
}
.font-barcode {
  font-family: 'Courier New', monospace; /* Fallback for barcode-like feel */
  letter-spacing: 2px;
}
</style>
