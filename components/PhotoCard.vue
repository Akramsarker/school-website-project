<template>
  <div 
    @click="$emit('view', photo)"
    class="relative group rounded-xl overflow-hidden glass-panel border border-gold/10 hover:border-gold/30 shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
  >
    <!-- Image -->
    <div class="relative overflow-hidden aspect-video md:aspect-[4/3] w-full min-h-[180px] flex items-center justify-center bg-primary-dark/50">
      <img 
        v-if="!imageError"
        :src="photo.url" 
        :alt="photo.caption" 
        @error="handleImageError"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <!-- Gorgeous placeholder for gallery -->
      <div v-else class="w-full h-full bg-gradient-to-br from-primary-light/50 via-primary-dark/80 to-primary-dark/95 flex flex-col items-center justify-center p-6 border border-gold/15 text-center">
        <span class="text-3xl mb-1 filter drop-shadow">📸</span>
        <p class="text-[10px] text-gold font-bold tracking-widest uppercase mb-1">{{ photo.category }}</p>
        <span class="text-[9px] text-slate-400 tracking-wider leading-relaxed line-clamp-2 px-4">{{ photo.caption }}</span>
      </div>

      <!-- Hover Overlay -->
      <div class="absolute inset-0 bg-primary-dark/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 pointer-events-none">
        <p class="text-xs text-gold font-bold tracking-widest uppercase mb-1">
          {{ photo.category }}
        </p>
        <p class="text-sm text-slate-100 font-medium leading-snug line-clamp-2">
          {{ photo.caption }}
        </p>
        <span class="inline-flex items-center space-x-1.5 text-xs text-gold-light mt-3 font-semibold group-hover:translate-x-1 transition-transform duration-200">
          <span>দেখতে ক্লিক করুন</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
        </span>
      </div>
    </div>

    <!-- Static Label (Visible on small devices or before hover) -->
    <div class="p-4 bg-primary/20 flex items-center justify-between group-hover:bg-primary/30 transition-colors">
      <span class="text-xs font-semibold tracking-wider text-gold-light px-2.5 py-1 bg-primary-dark/50 border border-gold/15 rounded-md shrink-0">
        {{ photo.category }}
      </span>
      <span class="text-[11px] text-slate-400 font-medium truncate max-w-[150px] ml-2">
        {{ photo.caption }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  photo: {
    type: Object,
    required: true
  }
})

defineEmits(['view'])

const imageError = ref(false)
const handleImageError = () => {
  imageError.value = true
}
</script>

