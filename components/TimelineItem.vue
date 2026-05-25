<template>
  <div 
    class="flex flex-col md:flex-row items-center justify-center w-full mb-12 group"
    :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''"
  >
    <!-- Content Card Area -->
    <div class="w-full md:w-1/2 flex justify-start" :class="index % 2 === 0 ? 'md:justify-end md:pr-12' : 'md:pl-12'">
      <div 
        class="w-full glass-panel p-6 rounded-xl relative overflow-hidden transition-all duration-300 hover:border-gold/30 hover:shadow-2xl hover:-translate-y-1"
        :class="index % 2 === 0 ? 'md:text-right' : 'md:text-left'"
      >
        <!-- Subtle gold line in card side -->
        <div 
          class="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-gold-light to-gold-dark"
          :class="index % 2 === 0 ? 'right-0' : 'left-0'"
        ></div>

        <!-- Year Badge (inside card for mobile context, clean desktop design) -->
        <span class="inline-block px-3 py-1 bg-gold/15 text-gold font-serif font-black tracking-wider text-sm rounded-md mb-3 border border-gold/25">
          {{ translateNumerals(milestone.year) }}
        </span>

        <h3 class="font-serif font-bold text-lg text-white mb-2 tracking-wide group-hover:text-gold-light transition-colors">
          {{ milestone.title }}
        </h3>
        
        <p class="text-sm text-slate-300 leading-relaxed font-light">
          {{ milestone.description }}
        </p>
      </div>
    </div>

    <!-- Center Line Node Indicator -->
    <div class="absolute md:relative flex items-center justify-center z-10 my-4 md:my-0 w-8 h-8 shrink-0">
      <!-- Glow background -->
      <div class="absolute w-8 h-8 rounded-full bg-gold/15 animate-ping opacity-60"></div>
      
      <!-- Central Gold Bead Node -->
      <div class="w-4 h-4 bg-gradient-to-br from-gold-light via-gold to-gold-dark rounded-full border-2 border-primary shadow-lg transform transition-transform group-hover:scale-125 duration-300"></div>
    </div>

    <!-- Spacer Column to balance the grid on desktop -->
    <div class="hidden md:block w-1/2"></div>
  </div>
</template>

<script setup>
import { useBanglaNumerals } from '~/composables/useBanglaNumerals'

const { translateNumerals } = useBanglaNumerals()

defineProps({
  milestone: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

</script>
