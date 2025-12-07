<template>
  <section class="py-24 relative overflow-hidden bg-bg-dark">
    <!-- Grid 3D Effect -->
    <div class="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none transform perspective-1000 rotate-x-12"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
      
      <!-- Mockup -->
      <div class="w-full md:w-1/2 flex justify-center">
        <div class="relative w-72 h-[550px] bg-black border-[3px] border-neon-cyan/50 rounded-[3rem] shadow-[0_0_30px_rgba(0,240,255,0.3)] overflow-hidden">
          <!-- Screen -->
          <div class="absolute inset-2 bg-gray-900 rounded-[2.5rem] overflow-hidden flex flex-col">
            <div class="h-8 bg-black w-full flex justify-center pt-2">
               <div class="w-20 h-4 bg-black rounded-b-xl"></div>
            </div>
            <!-- Fake App UI -->
            <div class="flex-1 p-4 space-y-4">
              <div class="flex justify-between items-center text-white">
                <span>Bonjour Max</span>
                <div class="w-8 h-8 rounded-full bg-neon-cyan"></div>
              </div>
              <div class="bg-gray-800 p-4 rounded-xl">
                 <div class="text-xs text-gray-400">Workout du jour</div>
                 <div class="text-white font-bold">Chest & Triceps</div>
              </div>
              <div class="space-y-2">
                 <div class="h-10 bg-gray-800 rounded w-full"></div>
                 <div class="h-10 bg-gray-800 rounded w-full"></div>
                 <div class="h-10 bg-gray-800 rounded w-full"></div>
              </div>
              <div class="mt-auto bg-neon-magenta/20 p-4 rounded-xl text-center text-neon-magenta font-bold">
                START WORKOUT
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Text -->
      <div class="w-full md:w-1/2">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
          TON COACH <br />
          <span class="text-neon-cyan">DANS TA POCHE</span>
        </h2>
        <p class="text-gray-300 text-lg mb-8">
          Accède à tes programmes, traque tes performances et reste connecté avec Max 24/7. L'application officielle pour monitorer ta transformation.
        </p>
        
        <ul class="space-y-4 mb-10 text-gray-300">
          <li class="flex items-center"><span class="text-neon-cyan mr-3">Scan</span> Tracking des charges</li>
          <li class="flex items-center"><span class="text-neon-cyan mr-3">Time</span> Chronomètre intégré</li>
          <li class="flex items-center"><span class="text-neon-cyan mr-3">Chat</span> Messagerie directe</li>
          <li class="flex items-center"><span class="text-neon-cyan mr-3">Food</span> Macro-calculateur</li>
        </ul>
        
        <div class="flex gap-4">
          <button class="bg-white text-black px-6 py-3 rounded flex items-center gap-2 hover:bg-gray-200 transition-colors font-bold">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.8 0c-4.9 0-8.9 4-8.9 8.9 0 4.9 4 8.9 8.9 8.9 4.9 0 8.9-4 8.9-8.9 0-4.9-4-8.9-8.9-8.9z"/></svg> 
            App Store
          </button>
          <button class="bg-transparent border border-white/30 text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-white/10 transition-colors font-bold">
             Google Play
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
