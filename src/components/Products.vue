<script setup>
const products = [
  { name: 'NEON GAINS WHEY ISOLATE', price: '59€', desc: '90% Protéine Pure', color: 'cyan', image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=1000' },
  { name: 'CREATINE MATRIX', price: '29€', desc: 'Force Explosive', color: 'green', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000' },
  { name: 'PRE-WORKOUT VOLT', price: '39€', desc: 'Énergie Maximale', color: 'magenta', image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1000' },
  { name: 'BCAA FUSION', price: '34€', desc: 'Récupération Optimale', color: 'purple', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000' },
  { name: 'OMEGA-3 ULTRA', price: '24€', desc: 'Santé Articulaire', color: 'cyan', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000' },
  { name: 'MASS GAINER 3000', price: '49€', desc: 'Prise de Masse', color: 'green', image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=1000' },
]

const getColorClass = (color) => {
  const map = {
    cyan: 'text-neon-cyan border-neon-cyan shadow-glow-cyan hover:shadow-cyan-bright',
    green: 'text-neon-green border-neon-green shadow-glow-green hover:shadow-green-bright',
    magenta: 'text-neon-magenta border-neon-magenta shadow-glow-magenta hover:shadow-magenta-bright',
    purple: 'text-neon-purple border-neon-purple shadow-glow-purple hover:shadow-purple-bright'
  }
  return map[color] || map.cyan
}

const getBtnClass = (color) => {
   const map = {
    cyan: 'bg-neon-cyan text-black hover:bg-white',
    green: 'bg-neon-green text-black hover:bg-white',
    magenta: 'bg-neon-magenta text-white hover:bg-white hover:text-black',
    purple: 'bg-neon-purple text-white hover:bg-white hover:text-black'
   }
   return map[color] || map.cyan
}
</script>

<template>
  <section id="products" class="py-24 bg-bg-darker relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl md:text-5xl font-display font-bold text-center mb-16 uppercase animate-glitch" style="animation-duration: 3s">
        Fuel Your <span class="text-neon-cyan">Gains</span>
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="product in products" 
          :key="product.name"
          class="group bg-bg-dark border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all duration-300 hover:shadow-lg"
        >
          <div class="h-64 overflow-hidden relative">
            <div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
            <img :src="product.image" :alt="product.name" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
            <!-- Holographic overlay effect on hover could go here -->
          </div>
          
          <div class="p-6">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-bold text-white font-display">{{ product.name }}</h3>
              <div class="flex text-yellow-400 text-sm">★★★★★</div>
            </div>
            <p class="text-gray-400 text-sm mb-4">{{ product.desc }}</p>
            
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-white">{{ product.price }}</span>
              <button 
                class="px-4 py-2 font-bold rounded-sm transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)] transform active:scale-95"
                :class="getBtnClass(product.color)"
              >
                AJOUTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shadow-cyan-bright { box-shadow: 0 0 20px #00f0ff; }
.shadow-green-bright { box-shadow: 0 0 20px #39ff14; }
.shadow-magenta-bright { box-shadow: 0 0 20px #ff006e; }
.shadow-purple-bright { box-shadow: 0 0 20px #b026ff; }
</style>
