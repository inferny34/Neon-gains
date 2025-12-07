<template>
  <section id="programs" class="py-24 bg-bg-dark relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-4">
          NOS <span class="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan">PROGRAMMES</span>
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto">Choisis ton niveau d'engagement. Résultats garantis pour chaque guerrier.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- STARTER -->
        <div class="group relative bg-black/50 border border-white/10 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300">
          <div class="absolute top-0 left-0 w-full h-1 bg-neon-green shadow-[0_0_10px_#39ff14]"></div>
          <h3 class="text-2xl font-display font-bold text-white mb-2 group-hover:text-neon-green transition-colors">STARTER</h3>
          <div class="text-4xl font-bold text-neon-green mb-6">97€<span class="text-sm text-gray-500 font-normal">/mois</span></div>
          
          <ul class="space-y-4 mb-8 text-left text-gray-300">
            <li class="flex items-center"><span class="text-neon-green mr-2">✓</span> Programme en ligne</li>
            <li class="flex items-center"><span class="text-neon-green mr-2">✓</span> 3 mois d'accès</li>
            <li class="flex items-center"><span class="text-neon-green mr-2">✓</span> Vidéos exercices HD</li>
            <li class="flex items-center"><span class="text-neon-green mr-2">✓</span> Plan nutritionnel base</li>
          </ul>
          
          <button class="w-full py-3 border border-neon-green text-neon-green font-bold hover:bg-neon-green hover:text-black transition-all shadow-[0_0_10px_rgba(57,255,20,0.1)] hover:shadow-[0_0_20px_rgba(57,255,20,0.5)]">
            CHOISIR
          </button>
        </div>
        
        <!-- PRO -->
        <div class="group relative bg-black/50 border border-neon-cyan p-8 rounded-xl hover:-translate-y-4 transition-transform duration-300 shadow-[0_0_20px_rgba(0,240,255,0.1)]">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-neon-cyan text-black px-4 py-1 font-bold text-sm tracking-widest shadow-[0_0_10px_#00f0ff]">POPULAIRE</div>
          <h3 class="text-2xl font-display font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">PRO</h3>
          <div class="text-4xl font-bold text-neon-cyan mb-6">147€<span class="text-sm text-gray-500 font-normal">/mois</span></div>
          
          <ul class="space-y-4 mb-8 text-left text-gray-300">
            <li class="flex items-center"><span class="text-neon-cyan mr-2">✓</span> Coaching Semi-Perso</li>
            <li class="flex items-center"><span class="text-neon-cyan mr-2">✓</span> 6 mois d'accès</li>
            <li class="flex items-center"><span class="text-neon-cyan mr-2">✓</span> Suivi Hebdomadaire</li>
             <li class="flex items-center"><span class="text-neon-cyan mr-2">✓</span> Plan Nutrition Perso</li>
            <li class="flex items-center"><span class="text-neon-cyan mr-2">✓</span> Accès App Mobile</li>
          </ul>
          
          <button class="w-full py-3 bg-neon-cyan text-black font-bold hover:bg-white transition-all shadow-[0_0_15px_rgba(0,240,255,0.5)]">
            DÉMARRER
          </button>
        </div>
        
        <!-- ELITE -->
        <div class="group relative bg-black/50 border border-white/10 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
          <div class="absolute inset-0 bg-neon-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          <div class="absolute top-0 left-0 w-full h-1 bg-neon-magenta shadow-[0_0_10px_#ff006e]"></div>
          <h3 class="text-2xl font-display font-bold text-white mb-2 group-hover:text-neon-magenta transition-colors">ELITE</h3>
          <div class="text-4xl font-bold text-neon-magenta mb-6">297€<span class="text-sm text-gray-500 font-normal">/mois</span></div>
          
          <ul class="space-y-4 mb-8 text-left text-gray-300">
            <li class="flex items-center"><span class="text-neon-magenta mr-2">✓</span> 100% Personnalisé</li>
            <li class="flex items-center"><span class="text-neon-magenta mr-2">✓</span> Accès Illimité</li>
            <li class="flex items-center"><span class="text-neon-magenta mr-2">✓</span> Suivi Quotidien</li>
            <li class="flex items-center"><span class="text-neon-magenta mr-2">✓</span> Vidéo Calls Privés</li>
             <li class="flex items-center"><span class="text-neon-magenta mr-2">✓</span> Ajustements Live</li>
          </ul>
          
          <button class="w-full py-3 border border-neon-magenta text-neon-magenta font-bold hover:bg-neon-magenta hover:text-white transition-all shadow-[0_0_10px_rgba(255,0,110,0.1)] hover:shadow-[0_0_20px_rgba(255,0,110,0.5)]">
            POSTULER
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
