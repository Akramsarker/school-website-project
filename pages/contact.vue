<template>
  <div class="py-12 bg-primary-dark relative min-h-screen">
    <!-- Glowing background ornaments -->
    <div class="absolute top-20 right-10 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">

        <div class="mb-6">
          <span
            class="text-xs font-bold tracking-widest text-gold uppercase px-3 py-1 bg-gold/10 border border-gold/20 rounded-full">
            {{ copy.badge }}
          </span>
        </div>
        <h1 class="text-4xl md:text-5xl font-serif font-black text-white tracking-wide leading-tight">
          {{ 'আমাদের সাথে ' }}
          <span class="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
            {{ 'যুক্ত হোন' }}
          </span>
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark mx-auto my-6"></div>
        <p class="text-slate-300 text-base md:text-lg leading-relaxed font-light">
          {{ copy.description }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <!-- Column 1: Info Cards (4 Cols) -->
        <div class="lg:col-span-4 space-y-6">
          <h2 class="font-serif font-bold text-2xl text-white tracking-wide border-b border-gold/10 pb-3">
            {{ copy.infoTitle }}
          </h2>

          <div class="space-y-4">
            <div v-for="info in contactInfo" :key="info.key"
              class="glass-panel p-5 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 flex items-start space-x-4">
              <div
                class="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center text-gold border border-gold/20 shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="info.icon"></svg>
              </div>
              <div class="space-y-1">
                <h4 class="font-serif font-semibold text-slate-100 text-sm">
                  {{ info.title }}
                </h4>
                <p class="text-xs text-slate-400 whitespace-pre-line leading-relaxed">
                  {{ info.details }}
                </p>
              </div>
            </div>
          </div>

          <!-- Working Hours Card -->
          <div
            class="glass-panel p-6 rounded-xl border border-gold/15 bg-gradient-to-br from-primary-light/5 via-transparent to-transparent">
            <h3 class="font-serif font-bold text-base text-gold mb-3">
              {{ copy.hoursTitle }}
            </h3>
            <ul class="space-y-2 text-xs text-slate-300">
              <li class="flex justify-between">
                <span>{{ 'শনিবার - বৃহস্পতিবার' }}</span>
                <span class="font-semibold">{{ 'সকাল ৯:০০ - বিকাল ৪:০০' }}</span>
              </li>
              <li class="flex justify-between text-slate-400">
                <span>{{ 'শুক্রবার' }}</span>
                <span>{{ 'বন্ধ' }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Column 2: Form & Map (8 Cols) -->
        <div class="lg:col-span-8 space-y-8">
          <!-- Submission Feedback Form -->
          <div class="glass-panel p-6 md:p-8 rounded-2xl border border-gold/15 shadow-xl relative overflow-hidden">
            <h2 class="font-serif font-bold text-2xl text-white tracking-wide mb-6">
              {{ copy.formTitle }}
            </h2>

            <form v-if="!formSubmitted" @submit.prevent="submitForm" class="space-y-5">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <!-- Name -->
                <div class="space-y-1.5">
                  <label for="name" class="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    {{ 'পূর্ণ নাম' }}
                  </label>
                  <input v-model="form.name" id="name" type="text" required :placeholder="'যেমন: আব্দুল করিম'"
                    class="block w-full px-4 py-3 bg-primary-dark/60 rounded-lg border border-gold/20 text-white placeholder-slate-500 focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none text-sm transition-all" />
                </div>

                <!-- Email -->
                <div class="space-y-1.5">
                  <label for="email" class="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    {{ 'ইমেইল ঠিকানা' }}
                  </label>
                  <input v-model="form.email" id="email" type="email" required :placeholder="'যেমন: karim@gmail.com'"
                    class="block w-full px-4 py-3 bg-primary-dark/60 rounded-lg border border-gold/20 text-white placeholder-slate-500 focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none text-sm transition-all" />
                </div>
              </div>

              <!-- Subject / Purpose -->
              <div class="space-y-1.5">
                <label for="subject" class="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  {{ 'যোগাযোগের উদ্দেশ্য' }}
                </label>
                <select v-model="form.subject" id="subject"
                  class="block w-full px-4 py-3 bg-primary-dark/60 rounded-lg border border-gold/20 text-white focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none text-sm transition-all">
                  <option value="Reunion Program">
                    {{ 'পূর্ণ মিলন অনুষ্ঠান নিবন্ধন' }}
                  </option>
                  <option value="Alumni Directory Profile">
                    {{ 'প্রাক্তন ছাত্র ডিরেক্টরি প্রোফাইল জমা' }}
                  </option>
                  <option value="General Admission Inquiry">
                    {{ 'ভর্তি সংক্রান্ত সাধারণ জিজ্ঞাসা' }}
                  </option>
                  <option value="Jubilee Souvenir Sponsorship">
                    {{ 'পূর্ণ মিলন অনুষ্ঠান স্মারক স্পনসরশিপ' }}
                  </option>
                  <option value="Other Inquiries">
                    {{ 'অন্যান্য জিজ্ঞাসা ও মতামত' }}
                  </option>
                </select>
              </div>

              <!-- Message -->
              <div class="space-y-1.5">
                <label for="message" class="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  {{ 'আপনার বার্তা' }}
                </label>
                <textarea v-model="form.message" id="message" rows="5" required
                  :placeholder="'এখানে আপনার শুভেচ্ছা বার্তা, জিজ্ঞাসা বা স্মৃতিকথা লিখুন...'"
                  class="block w-full px-4 py-3 bg-primary-dark/60 rounded-lg border border-gold/20 text-white placeholder-slate-500 focus:ring-1 focus:ring-gold focus:border-gold focus:outline-none text-sm transition-all"></textarea>
              </div>

              <!-- Submit Button -->
              <div class="pt-2">
                <button type="submit" :disabled="formSubmitting"
                  class="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-gold-light via-gold to-gold-dark hover:from-gold hover:to-gold-dark text-primary-dark font-bold rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.01] flex items-center justify-center space-x-2 disabled:opacity-50">
                  <span v-if="!formSubmitting">
                    {{ 'বার্তা পাঠান' }}
                  </span>
                  <span v-else class="flex items-center space-x-2">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-dark" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                      <path class="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>{{ 'বার্তা পাঠানো হচ্ছে...' }}</span>
                  </span>
                </button>
              </div>
            </form>

            <!-- Success State -->
            <div v-else class="text-center py-10 space-y-6 animate-scale-up">
              <div
                class="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto border-2 border-gold text-gold">
                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="space-y-2">
                <h3 class="font-serif font-bold text-2xl text-gold-light">
                  {{ 'বার্তা সফলভাবে পাঠানো হয়েছে!' }}
                </h3>
                <p class="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                  ধন্যবাদ, {{ form.name }}, আমাদের পূর্ণ মিলন অনুষ্ঠানে শরিক হওয়ার জন্য। আপনার বার্তাটি আমাদের
                  সচিবালয়ে সফলভাবে রেকর্ড করা হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
                </p>
              </div>
              <button @click="resetForm"
                class="px-6 py-2.5 bg-gold/10 hover:bg-gold/20 text-gold font-semibold rounded-lg border border-gold/25 text-xs transition-colors">
                {{ 'আরেকটি বার্তা পাঠান' }}
              </button>
            </div>
          </div>

          <!-- Beautiful Iframe Google Map pointing to the real school in Kushtia, Bangladesh -->
          <div class="glass-panel overflow-hidden rounded-2xl border border-gold/20 shadow-2xl relative">
            <div class="p-4 bg-primary/30 border-b border-gold/15 flex items-center justify-between">
              <span class="text-xs font-semibold tracking-wider text-gold-light uppercase">
                {{ 'ক্যাম্পাস লোকেশন ম্যাপ' }}
              </span>
              <span class="text-[10px] text-slate-400 font-medium">
                {{ 'ছাতীয়ানী, কুমারখালী, কুষ্টিয়া, বাংলাদেশ' }}
              </span>
            </div>

            <div class="relative aspect-video w-full bg-primary-dark/40">
              <iframe
                src="https://maps.google.com/maps?q=Chhatiyani%20Rokeya%20Obedul%20Haque%20Secondary%20School&t=&z=15&ie=UTF8&iwloc=&output=embed"
                class="absolute inset-0 w-full h-full border-0 filter invert opacity-90 contrast-125" allowfullscreen=""
                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'


const formSubmitting = ref(false)
const formSubmitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: 'Reunion Program',
  message: ''
})

useHead({
  title: 'যোগাযোগ - ছাতীয়ানী রোকেয়া ওবেদুল হক উচ্চ বিদ্যালয়',
  meta: [
    {
      name: 'description',
      content: 'ছাতীয়ানী রোকেয়া ওবেদুল হক উচ্চ বিদ্যালয়ের পূর্ণ মিলন অনুষ্ঠান সচিবালয়ের সাথে যোগাযোগ করুন।'
    }
  ]
})

const copy = {
  badge: 'যোগাযোগ করুন',
  description: 'আপনি পূর্ণ মিলন অনুষ্ঠানের জন্য নিবন্ধন করতে ইচ্ছুক প্রাক্তন শিক্ষার্থী হন, নতুন ভর্তিচ্ছু অভিভাবক হন, অথবা যেকোনো জিজ্ঞাসা থাকে - আমাদের সাথে সরাসরি যোগাযোগ করুন।',
  infoTitle: 'যোগাযোগের তথ্য',
  hoursTitle: 'সচিবালয় কার্যালয়ের সময়সূচি',
  formTitle: 'আমাদের বার্তা পাঠান'
}

const contactInfo = [
  {
    key: 'address',
    title: 'ভর্তি ও সাধারণ সচিবালয়',
    details: 'ছাতীয়ানী রোকেয়া ওবেদুল হক উচ্চ বিদ্যালয়,\nছাতীয়ানী, কুমারখালী, কুষ্টিয়া, বাংলাদেশ',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>',
  },
  {
    key: 'phone',
    title: 'টেলিফোন ও মোবাইল লাইন',
    details: '+৮৮০ ১৭১২-৩৪৫৬৭৮ (প্রধান শিক্ষক)\n+৮৮০ ২৪৭৭৭-৮৯১১২ (অফিস)',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>',
  },
  {
    key: 'email',
    title: 'ইলেকট্রনিক মেইলিং ডেস্ক',
    details: 'info@crhhs.edu.bd\nalumni@crhhs.edu.bd',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>',
  }
]

const submitForm = () => {
  formSubmitting.value = true

  // Simulate network request to keep it static-friendly
  setTimeout(() => {
    formSubmitting.value = false
    formSubmitted.value = true
  }, 1000)
}

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.subject = 'Reunion Program'
  form.message = ''
  formSubmitted.value = false
}
</script>

<style scoped>
.animate-scale-up {
  animation: scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes scaleUp {
  from {
    transform: scale(0.9);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
