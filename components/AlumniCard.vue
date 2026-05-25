<template>
  <div class="glass-panel rounded-xl overflow-hidden shadow-xl hover:border-gold/40 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col h-full group">
    <!-- Image Area with Gold Border Accent -->
    <div class="relative overflow-hidden aspect-square">
      <img 
        v-if="!imageError"
        :src="alumnus.photo" 
        :alt="alumnus.name" 
        @error="handleImageError"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <!-- Gorgeous glass/gold geometric initials placeholder -->
      <div v-else class="w-full h-full bg-gradient-to-br from-primary-light via-primary to-primary-dark flex flex-col items-center justify-center text-center p-4 border border-gold/15">
        <div class="w-16 h-16 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center mb-2 shadow-inner">
          <span class="font-serif font-black text-gold text-2xl tracking-wider">{{ getInitials(alumnus.name) }}</span>
        </div>
        <span class="text-[10px] text-slate-400 tracking-widest uppercase">পূর্ণ মিলন অনুষ্ঠান কৃতি ছাত্র-ছাত্রী</span>
      </div>
      
      <!-- Gold Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
      
      <!-- Batch Badge -->
      <div class="absolute top-4 right-4 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-primary-dark font-serif font-black px-3.5 py-1.5 rounded-full text-xs shadow-md border border-white/20 z-10">
        ব্যাচ {{ translateNumerals(alumnus.batch) }}
      </div>
    </div>

    <!-- Content Area -->
    <div class="p-6 flex-grow flex flex-col justify-between">
      <div class="space-y-2">
        <h3 class="font-serif font-bold text-lg text-slate-100 group-hover:text-gold transition-colors duration-200">
          {{ alumnus.name }}
        </h3>
        <p class="text-xs tracking-wider text-gold-light uppercase font-semibold">
          {{ alumnus.profession }}
        </p>
      </div>

      <!-- Divider -->
      <div class="w-full h-px bg-gold/10 my-4"></div>

      <!-- Inspirational Message / Quote -->
      <div class="relative flex-grow flex items-center">
        <span class="absolute -top-3 -left-2 font-serif text-5xl text-gold/10 pointer-events-none">“</span>
        <p class="text-xs text-slate-300 italic pl-4 relative z-10 leading-relaxed">
          {{ alumnus.message }}
        </p>
        <span class="absolute -bottom-6 -right-2 font-serif text-5xl text-gold/10 pointer-events-none">”</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBanglaNumerals } from '~/composables/useBanglaNumerals'

const { translateNumerals } = useBanglaNumerals()

defineProps({
  alumnus: {
    type: Object,
    required: true
  }
})

const imageError = ref(false)
const handleImageError = () => {
  imageError.value = true
}

// Initials generator
const getInitials = (name) => {
  const nameStr = name || ''
  if (!nameStr) return 'CR'
  name = nameStr
  const parts = name.split(' ')
  const filteredParts = parts.filter(p => !p.includes('.') && !p.includes('ডাঃ') && !p.includes('প্রকৌশলী'))
  if (filteredParts.length > 0) {
    return filteredParts.map(n => n[0]).join('').substring(0, 2)
  }
  return parts.map(n => n[0]).join('').substring(0, 2)
}

</script>

