<script setup>
import { ref } from 'vue'

const faqs = [
  { q: 'Combien de temps pour voir des résultats ?', a: 'Avec une adhésion stricte, les premiers changements physiques sont visibles dès 4 semaines. La transformation radicale prend 12 semaines.' },
  { q: 'Faut-il du matériel spécifique ?', a: 'Le programme Starter peut se faire au poids de corps. Pour Pro et Elite, un accès salle ou des haltères sont recommandés.' },
  { q: 'Puis-je annuler mon abonnement ?', a: 'Oui, sans engagement. Tu peux arrêter à tout moment depuis ton espace membre.' },
  { q: 'Les suppléments sont-ils obligatoires ?', a: 'Non, mais ils accélèrent la récupération et les résultats de 20 à 30%. Nous les recommandons fortement.' },
  { q: 'Le coaching nutrition est-il inclus ?', a: 'Oui, tous nos programmes incluent des guidelines nutritionnelles. Le plan 100% personnalisé est réservé aux membres Elite.' },
  { q: 'Adapté aux débutants ?', a: 'Absolument. Chaque exercice est expliqué en vidéo et les charges sont adaptées à ton niveau de force initial.' },
]

const activeIndex = ref(null)

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" class="py-24 bg-bg-darker">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 class="text-4xl font-display font-bold text-center text-white mb-16 uppercase">
        Questions <span class="text-neon-cyan">Fréquentes</span>
      </h2>
      
      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="border border-white/10 bg-black/40 rounded-lg overflow-hidden transition-all duration-300 hover:border-neon-cyan/50"
          :class="{ 'border-neon-cyan shadow-[0_0_15px_rgba(0,240,255,0.2)]': activeIndex === index }"
        >
          <button 
            @click="toggle(index)"
            class="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
          >
            <span class="text-lg font-bold text-white transition-colors" :class="{ 'text-neon-cyan': activeIndex === index }">{{ faq.q }}</span>
            <span class="text-2xl transition-transform duration-300" :class="{ 'rotate-45 text-neon-magenta': activeIndex === index, 'text-gray-500': activeIndex !== index }">+</span>
          </button>
          
          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform scale-y-0 opacity-0 max-h-0"
            enter-to-class="transform scale-y-100 opacity-100 max-h-40"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="transform scale-y-100 opacity-100 max-h-40"
            leave-to-class="transform scale-y-0 opacity-0 max-h-0"
          >
            <div v-show="activeIndex === index" class="px-6 pb-4 text-gray-400 origin-top">
              <p>{{ faq.a }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>
