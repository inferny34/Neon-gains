<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const menuItems = [
  { name: 'PROGRAMMES', href: '#programs' },
  { name: 'COACHING', href: '#coach' },
  { name: 'PRODUITS', href: '#products' },
  { name: 'RÉSULTATS', href: '#transformations' },
  { name: 'CONTACT', href: '#contact' },
]
</script>

<template>
  <nav 
    class="fixed w-full z-50 transition-all duration-300 border-b border-transparent"
    :class="{ 'bg-black/80 backdrop-blur-md border-neon-cyan/30': isScrolled, 'bg-transparent': !isScrolled }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex-shrink-0 cursor-pointer group">
          <span class="font-display text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:text-neon-cyan transition-colors duration-300 drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">
            NEON
          </span>
          <span class="font-display text-2xl font-bold text-neon-cyan ml-2 drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] animate-pulse-slow">
            GAINS
          </span>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a 
              v-for="item in menuItems" 
              :key="item.name" 
              :href="item.href"
              class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium font-display tracking-widest transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,0,110,0.5)] hover:text-neon-magenta"
            >
              {{ item.name }}
            </a>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="-mr-2 flex md:hidden">
          <button 
            @click="toggleMenu" 
            type="button" 
            class="inline-flex items-center justify-center p-2 rounded-md text-neon-cyan hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon menu -->
            <svg v-if="!isMenuOpen" class="block h-8 w-8 drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Icon close -->
            <svg v-else class="block h-8 w-8 text-neon-magenta drop-shadow-[0_0_5px_rgba(255,0,110,0.8)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-5 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-5 opacity-0"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-black/95 backdrop-blur-xl border-b border-neon-magenta/50">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            v-for="item in menuItems" 
            :key="item.name" 
            :href="item.href"
            @click="isMenuOpen = false"
            class="text-gray-300 hover:text-neon-cyan block px-3 py-2 rounded-md text-base font-medium font-display tracking-widest border-l-2 border-transparent hover:border-neon-cyan hover:bg-white/5 transition-all"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </transition>
    
    <!-- Bottom neon border that pulses -->
    <div class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"></div>
  </nav>
</template>
