<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-panel bg-primary-dark/80 backdrop-blur-md border-b border-gold/15">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <NuxtLink to="/" class="flex items-center group shrink-0">
          <AppLogo class="h-7 md:h-8 w-auto group-hover:scale-105 transition-transform duration-300 shrink-0" />
        </NuxtLink>

        <!-- Desktop Menu & Controls -->
        <div class="hidden lg:flex items-center space-x-1">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path"
            class="px-3.5 py-2 rounded-md text-sm font-medium tracking-wide text-slate-300 hover:text-gold hover:bg-primary-light/30 transition-all duration-200"
            active-class="text-gold! bg-primary-light/45 border-b-2 border-gold rounded-b-none"
          >
            {{ link.name }}
          </NuxtLink>
        </div>

        <!-- Mobile Buttons -->
        <div class="lg:hidden flex items-center space-x-2">
          <!-- Hamburger Button -->
          <button 
            @click="toggleMobileMenu" 
            type="button" 
            class="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-gold hover:bg-primary-light/40 focus:outline-none transition-all"
            aria-controls="mobile-menu"
            :aria-expanded="isMobileMenuOpen.toString()"
          >
            <span class="sr-only">Open main menu</span>
            <svg 
              class="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                v-if="!isMobileMenuOpen" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16" 
              />
              <path 
                v-else 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Drawer -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="lg:hidden border-t border-gold/15 bg-primary-dark/95 backdrop-blur-lg shadow-xl"
        id="mobile-menu"
      >
        <div class="px-2 pt-2 pb-6 space-y-1 sm:px-3">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path"
            @click="closeMobileMenu"
            class="block px-4 py-3 rounded-md text-base font-medium tracking-wide text-slate-300 hover:text-gold hover:bg-primary-light/35 transition-all"
            active-class="text-gold! bg-primary-light/50 border-l-4 border-gold pl-3"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'হোম', path: '/' },
  { name: 'গ্যালারি', path: '/gallery' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>
