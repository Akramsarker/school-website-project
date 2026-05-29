<template>
  <div class="py-12 bg-primary-dark relative min-h-screen">
    <!-- Background glows -->
    <div class="absolute top-20 right-10 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <span class="text-xs font-bold tracking-widest text-gold uppercase px-3 py-1 bg-gold/10 border border-gold/20 rounded-full">
          {{ copy.badge }}
        </span>
        <h1 class="text-4xl md:text-5xl font-serif font-black text-white tracking-wide leading-tight">
          {{ 'দৃশ্যমান ইতিহাস ও ' }}
          <span class="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
            {{ 'ক্যাম্পাস গ্যালারি' }}
          </span>
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark mx-auto my-6"></div>
        <p class="text-slate-300 text-base md:text-lg leading-relaxed font-light">
          {{ copy.description }}
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button 
          v-for="cat in categories" 
          :key="cat.key"
          @click="activeCategory = cat.key"
          class="px-5 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 border focus:outline-none"
          :class="activeCategory === cat.key 
            ? 'bg-gradient-to-r from-gold-light via-gold to-gold-dark text-primary-dark border-transparent shadow-lg font-semibold scale-105' 
            : 'bg-primary-light/10 border-gold/15 text-slate-300 hover:text-gold hover:border-gold/30 hover:bg-primary-light/20'"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Gallery Photo Grid -->
      <div 
        v-if="filteredPhotos.length > 0"
        class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        <!-- Custom PhotoCard component listening to 'view' emitter -->
        <PhotoCard 
          v-for="photo in filteredPhotos" 
          :key="photo.url" 
          :photo="photo"
          @view="openLightbox"
          class="break-inside-avoid"
        />
      </div>

      <!-- Empty Category State -->
      <div 
        v-else 
        class="text-center py-16 glass-panel border border-gold/15 max-w-md mx-auto rounded-2xl space-y-3"
      >
        <p class="text-slate-400">
          {{ copy.emptyStateText }}
        </p>
        <button 
          @click="activeCategory = 'All'" 
          class="text-gold font-semibold hover:underline text-sm"
        >
          {{ copy.emptyStateBtn }}
        </button>
      </div>
    </div>

    <!-- Lightbox `<dialog>` Modal Backdrop and Dialog Container -->
    <dialog 
      ref="dialogRef" 
      @click="handleDialogClick"
      @close="onDialogClose"
      class="backdrop:bg-primary-dark/90 backdrop:backdrop-blur-md bg-transparent p-0 border-0 outline-none max-w-4xl w-[92vw] overflow-hidden rounded-2xl relative"
    >
      <div v-if="selectedPhoto" class="relative group/modal">
        <!-- Close Button -->
        <button 
          @click="closeLightbox" 
          type="button"
          class="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-primary-dark/80 border border-gold/30 hover:border-gold text-slate-300 hover:text-gold flex items-center justify-center transition-all shadow-lg backdrop-blur-sm"
          :aria-label="'ছবি বন্ধ করুন'"
        >
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Big Image Display Area -->
        <div class="relative max-h-[75vh] md:max-h-[80vh] overflow-hidden flex items-center justify-center bg-primary-dark/50">
          <img 
            :src="selectedPhoto.url" 
            :alt="selectedPhoto.caption" 
            class="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain rounded-t-2xl block"
          />
        </div>

        <!-- Captions Panel -->
        <div class="glass-panel p-5 border-t border-gold/20 rounded-b-2xl bg-primary-dark/95 backdrop-blur-md">
          <span class="inline-block px-3 py-1 bg-gold/15 text-gold text-[10px] tracking-wider uppercase font-semibold rounded-md border border-gold/20 mb-2">
            {{ selectedPhoto.category }}
          </span>
          <p class="text-sm md:text-base text-slate-100 font-light leading-relaxed">
            {{ selectedPhoto.caption }}
          </p>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import galleryData from '~/data/gallery.json'


const activeCategory = ref('All')

const categoryLabels = {
  'Old Photos': 'পুরানো ছবি',
  Events: 'অনুষ্ঠান',
  Sports: 'খেলাধুলা',
  Cultural: 'সাংস্কৃতিক'
}

const categories = [
  { key: 'All', label: 'সব ছবি' },
  { key: 'Old Photos', label: 'পুরানো ছবি' },
  { key: 'Events', label: 'অনুষ্ঠান' },
  { key: 'Sports', label: 'খেলাধুলা' },
  { key: 'Cultural', label: 'সাংস্কৃতিক' }
]

const filteredPhotos = computed(() => {
  if (activeCategory.value === 'All') return galleryData
  const label = categoryLabels[activeCategory.value]
  return galleryData.filter(photo => photo.category === label)
})

// Dialog Reference & Selected Photo State for Lightbox
const dialogRef = ref(null)
const selectedPhoto = ref(null)

const openLightbox = (photo) => {
  selectedPhoto.value = photo
  if (dialogRef.value) {
    dialogRef.value.showModal()
    // Add custom class to block scrolling on the main page
    document.body.classList.add('overflow-hidden')
  }
}

const closeLightbox = () => {
  if (dialogRef.value) {
    dialogRef.value.close()
  }
}

const onDialogClose = () => {
  selectedPhoto.value = null
  document.body.classList.remove('overflow-hidden')
}

// Custom Safari-friendly backdrop click detection
const handleDialogClick = (event) => {
  if (event.target === dialogRef.value) {
    closeLightbox()
  }
}

useHead({
  title: 'ক্যাম্পাস গ্যালারি - ছাতীয়ানী রোকেয়া ওবেদুল হক উচ্চ বিদ্যালয়',
  meta: [
    { 
      name: 'description', 
      content: 'ছাতীয়ানী রোকেয়া ওবেদুল হক উচ্চ বিদ্যালয়ের ঐতিহাসিক ও সাম্প্রতিক উৎসবের সুন্দর চিত্রশালা দেখুন।'
    }
  ]
})

const copy = {
  badge: 'পূর্ণ মিলন অনুষ্ঠান আর্কাইভ',
  description: '১৯৭৩ সাল থেকে আমাদের শিক্ষার্থীদের জীবনযাত্রা, খেলাধুলা ও সাংস্কৃতিক গৌরব এবং ক্যাম্পাসের ঐতিহাসিক স্মৃতিবাহী আলোকচিত্রের এক অসাধারণ সংগ্রহশালা।',
  emptyStateText: 'দুঃখিত, এই ক্যাটাগরিতে বর্তমানে কোনো ছবি পাওয়া যায়নি।',
  emptyStateBtn: 'সকল ক্যাটাগরিতে ফিরে যান'
}
</script>

<style scoped>
/* Scoped keyframe animation for the dialog entrance */
dialog[open] {
  animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes zoom {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
