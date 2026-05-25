import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  nitro: {
    preset: 'static'
  },
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  css: [
    '~/assets/css/tailwind.css'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'ছাতীয়ানী রোকেয়া ওবেদুল হক উচ্চ বিদ্যালয় - পূর্ণ মিলন অনুষ্ঠান',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'ছাতীয়ানী রোকেয়া ওবেদুল হক উচ্চ বিদ্যালয়ের পূর্ণ মিলন অনুষ্ঠান উদ্‌যাপনের অফিশিয়াল ওয়েবসাইট।' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Noto+Serif+Bengali:wght@400;500;600;700;900&display=swap' }
      ]
    }
  }
})
