<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import Coach from './components/Coach.vue'
import Programs from './components/Programs.vue'
import Products from './components/Products.vue'
import Transformations from './components/Transformations.vue'
import Method from './components/Method.vue'
import Stats from './components/Stats.vue'
import AppPromo from './components/AppPromo.vue'
import FAQ from './components/FAQ.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-bg-dark text-white selection:bg-neon-cyan selection:text-black font-sans">
    <NavBar />
    
    <main>
      <HeroSection />
      <Coach />
      <Programs />
      <Products />
      <Transformations />
      <Method />
      <Stats />
      <AppPromo />
      <FAQ />
      <Contact />
    </main>
    
    <Footer />
  </div>
</template>
