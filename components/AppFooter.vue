<template>
  <footer id="footer" class="bg-primary-dark/95 border-t border-gold/15 text-slate-300 py-12 relative overflow-hidden">
    <!-- Subtle Golden Background Accent -->
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl pointer-events-none">
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand / About Column -->
        <div class="space-y-4 col-span-1 md:col-span-2">
          <div class="flex items-center">
            <AppLogo class="h-8 w-auto shrink-0" />
          </div>
          <p class="text-sm text-slate-400 max-w-sm">
            প্রতিষ্ঠার পর থেকে, ছাতীয়ানী রোকেয়া ওবেদুল হক উচ্চ বিদ্যালয় শিক্ষার্থীদের রূপান্তরমূলক শিক্ষা নিশ্চিত করতে এবং
            আগামী দিনের স্বপ্নদর্শী ও নেতৃত্বদানকারী হিসেবে গড়ে তুলতে প্রতিশ্রুতিবদ্ধ।
          </p>
          <div class="flex space-x-3 pt-2">
            <!-- Social Icons (Mocked with gorgeous gold circles) -->
            <a href="https://www.facebook.com/groups/202534817595521" target="_blank"
              class="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center text-slate-400 hover:text-primary-dark hover:bg-gold hover:border-gold transition-all duration-300">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/groups/202534817595521" target="_blank"
              class="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center text-slate-400 hover:text-primary-dark hover:bg-gold hover:border-gold transition-all duration-300">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/groups/202534817595521" target="_blank"
              class="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center text-slate-400 hover:text-primary-dark hover:bg-gold hover:border-gold transition-all duration-300">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h3 class="font-serif font-semibold text-gold tracking-wide text-md border-l-2 border-gold pl-3">
            দ্রুত নেভিগেশন
          </h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink to="/#history" class="hover:text-gold transition-colors">পূর্ণ মিলন অনুষ্ঠান</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#alumni" class="hover:text-gold transition-colors">বিশিষ্ট প্রাক্তন শিক্ষার্থী</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#schedule" class="hover:text-gold transition-colors">অনুষ্ঠান সময়সূচী</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Info Column -->
        <div class="space-y-4">
          <h3 class="font-serif font-semibold text-gold tracking-wide text-md border-l-2 border-gold pl-3">
            যোগাযোগের তথ্য
          </h3>
          <ul class="space-y-3 text-sm text-slate-400">
            <li class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>
                ছাতীয়ানী,ধুনট,
                বগুড়া, বাংলাদেশ
              </span>
            </li>
            <li class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{{ translateNumerals('+880 01317745536') }}</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>akramsheikh1112@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div
        class="border-t border-gold/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400">
        <p class="text-center md:text-left">
          © ২০২৬ ছাতীয়ানী রোকেয়া ওবেদুল হক উচ্চ বিদ্যালয়। সর্বস্বত্ব সংরক্ষিত। গৌরবময় পূর্ণ মিলন অনুষ্ঠান উদযাপন।
        </p>
        <p class="mt-2 md:mt-0 text-slate-400 text-center md:text-right">
          ডিজাইন ও ডেভেলপ করেছেন
          <a href="https://www.facebook.com/md.akram.shekh.146" target="_blank" class="text-gold hover:underline transition-all font-medium mx-1">আকরাম</a>
          এবং
          <a href="https://www.facebook.com/rabbilifestyle" target="_blank" class="text-gold hover:underline transition-all font-medium mx-1">রাব্বি</a>।
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useBanglaNumerals } from '~/composables/useBanglaNumerals'

const { translateNumerals } = useBanglaNumerals()
</script>
