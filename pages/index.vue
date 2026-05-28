<template>
  <div class="space-y-24 pb-24 relative overflow-hidden">
    <!-- Hero Section -->
    <section 
      class="relative w-full min-h-[550px] md:min-h-[650px] flex items-center justify-center bg-cover bg-center overflow-hidden border-b border-gold/15"
      style="background-image: url('/images/hero/hero-image.jpeg');"
    >
      <!-- Overlay for readability and premium look -->
      <div class="absolute inset-0 bg-gradient-to-b from-primary-dark/65 via-primary-dark/45 to-primary-dark/80 z-0"></div>
      <div class="absolute inset-0 bg-black/35 z-0"></div>
      
      <!-- Glowing gradient accent -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl pointer-events-none z-0"></div>

      <!-- Hero Content -->
      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center text-center space-y-8">
        <div
          class="inline-flex items-center space-x-2 bg-gold/15 backdrop-blur-md border border-gold/30 px-4 py-1.5 rounded-full text-gold text-xs tracking-wider uppercase font-semibold animate-pulse"
        >
          <span>🎓 {{ copy.heroBadge }}</span>
        </div>

        <h1
          class="font-serif font-black text-4xl sm:text-5xl lg:text-7xl leading-tight text-white drop-shadow-lg"
          style="line-height: 1.2;"
        >
          <span class="block">{{ copy.heroTitleLine1 }}</span>
          <span class="block bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
            {{ copy.heroTitleLine2 }}
          </span>
          <span class="block">
            {{ copy.heroTitleLine3Prefix }}
            <span class="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
              {{ copy.heroTitleLine3Highlight }}
            </span>
          </span>
        </h1>

        <p class="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-light drop-shadow max-w-2xl">
          {{ copy.heroDescription }}
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
          <NuxtLink to="#history"
            class="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-gold-light via-gold to-gold-dark hover:from-gold hover:to-gold-dark text-primary-dark font-serif font-black tracking-wide rounded-lg shadow-lg hover:shadow-gold/25 transform hover:-translate-y-0.5 transition-all text-center">
            {{ copy.heroCtaHistory }}
          </NuxtLink>
          <NuxtLink to="#schedule"
            class="w-full sm:w-auto px-8 py-3.5 border-2 border-gold/35 text-gold hover:text-primary-dark hover:bg-gold hover:border-gold font-serif font-bold tracking-wide rounded-lg transform hover:-translate-y-0.5 transition-all backdrop-blur-sm text-center">
            {{ copy.heroCtaContact }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Stats Count Grid -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="glass-panel rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gold/15 p-8 shadow-xl text-center bg-gradient-to-br from-primary/30 to-primary-dark/60">
        <div v-for="stat in stats" :key="stat.key" class="py-4 md:py-0 space-y-1">
          <p class="font-serif text-3xl sm:text-4xl font-black text-gold">
            {{ stat.number }}
          </p>
          <p class="text-xs sm:text-sm text-slate-300 font-light tracking-wide uppercase">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </section>

    <!-- Principal's Address Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="glass-panel rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 via-primary-dark/40 to-transparent">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <!-- Picture Area -->
          <div
            class="lg:col-span-4 relative aspect-[4/3] lg:aspect-auto min-h-[300px] bg-primary-dark/60 overflow-hidden flex items-center justify-center">
            <img v-if="!principalImgError" src="/images/principal/principal.jpeg" :alt="copy.principalName"
              @error="principalImgError = true" class="w-full h-full object-cover" loading="lazy" />
            <!-- Fallback elegant silhouette icon -->
            <div v-else
              class="w-full h-full bg-gradient-to-br from-primary-light via-primary to-primary-dark flex flex-col items-center justify-center p-6 text-center border-b lg:border-b-0 lg:border-r border-gold/15">
              <div
                class="w-20 h-20 rounded-full bg-gold/10 border border-gold/45 flex items-center justify-center mb-3 shadow-inner">
                <span class="text-3xl">👨‍🏫</span>
              </div>
              <span class="text-xs text-gold uppercase tracking-widest font-serif font-black">শ্রদ্ধেয় প্রধান
                শিক্ষক</span>
            </div>

            <div
              class="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary-dark/90 via-transparent to-transparent pointer-events-none">
            </div>
            <!-- Caption -->
            <div class="absolute bottom-4 left-4 right-4 text-left z-10">
              <p class="font-serif font-bold text-md text-gold">
                {{ copy.principalName }}
              </p>
              <p class="text-xs text-slate-300">
                {{ copy.principalDesignation }}
              </p>
            </div>
          </div>

          <!-- Content Message -->
          <div class="lg:col-span-8 p-8 md:p-12 flex flex-col justify-center space-y-6">
            <h2 class="font-serif font-bold text-2xl sm:text-3xl text-gold border-l-4 border-gold pl-4 tracking-wide">
              {{ copy.principalAddressTitle }}
            </h2>

            <div class="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              <p>{{ copy.principalParagraph1 }}</p>
              <p>{{ copy.principalParagraph2 }}</p>
            </div>

            <!-- Signature SVG Mock -->
            <div class="pt-4 flex items-center space-x-3">
              <div class="w-10 h-px bg-gold/30"></div>
              <span class="font-serif italic text-gold text-sm tracking-widest">
                {{ copy.principalSignature }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

      <!-- EVENT SCHEDULE SECTION (অনুষ্ঠান সময়সূচী) -->
    <section id="schedule" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-24">
      <div class="text-center max-w-3xl mx-auto space-y-4">

        <div class="mb-6">
          <span
            class="text-xs font-bold tracking-widest text-gold uppercase px-3 py-1 bg-gold/10 border border-gold/20 rounded-full animate-pulse">
            {{ copy.scheduleSectionBadge }}
          </span>
        </div>
        <h2 class="text-3xl md:text-5xl font-serif font-black text-white tracking-wide leading-tight">
          {{ copy.scheduleSectionTitlePrefix }}
          <span class="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
            {{ copy.scheduleSectionTitleSuffix }}
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark mx-auto my-6"></div>
        <p class="text-slate-300 text-sm md:text-base leading-relaxed font-light">
          {{ copy.scheduleSectionDesc }}
        </p>
      </div>



      <!-- Single Day Theme Panel -->
      <div
        class="glass-panel p-6 rounded-2xl border border-gold/20 max-w-4xl mx-auto bg-gradient-to-br from-gold/10 via-primary-dark/30 to-primary/20 text-center relative overflow-hidden shadow-xl">
        <div class="absolute -right-12 -top-12 w-32 h-32 bg-gold/5 rounded-full blur-xl pointer-events-none"></div>
        <div class="space-y-2 relative z-10">
          <span
            class="text-xs uppercase font-extrabold tracking-widest text-gold bg-gold/15 px-4 py-1.5 rounded-full border border-gold/25">
            📅 {{ eventsData[0]?.dayTitle }}
          </span>
          <h4 class="font-serif font-black text-xl md:text-2xl text-white pt-2 leading-tight">
            {{ eventsData[0]?.theme }}
          </h4>
        </div>
      </div>

      <!-- Events List Container -->
      <div class="relative w-full py-6 max-w-4xl mx-auto">
        <!-- Central Line Track -->
        <div
          class="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/10 via-gold/30 to-gold/10">
        </div>

        <div class="space-y-8 relative animate-fade-in">
          <!-- Event Milestone Rows -->
          <div v-for="(event, idx) in filteredEvents" :key="idx"
            class="relative pl-14 md:pl-20 transition-all duration-300 transform">
            <!-- Timeline Pin / Icon -->
            <div
              class="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border shadow-lg transition-transform duration-300 hover:scale-110 z-10"
              :class="event.type === 'highlight'
                ? 'bg-gradient-to-br from-gold-light via-gold to-gold-dark text-primary-dark border-gold-light shadow-gold/20'
                : 'bg-primary border-gold/30 text-gold shadow-black/40'">
              <!-- Dynamic SVG Icons -->
              <svg v-if="event.icon === 'rally'" class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21v8h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
              <svg v-else-if="event.icon === 'mic'" class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              <svg v-else-if="event.icon === 'sports'" class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7.464 1.258a9.99 9.99 0 00-1.032 3.43c.094.02.186.043.278.07 1.547.458 2.664 1.763 2.766 3.328a9.96 9.96 0 004.952 2.67 9.99 9.99 0 004.952-2.67c.102-1.565 1.22-2.87 2.766-3.328.092-.027.184-.05.278-.07a9.99 9.99 0 00-1.032-3.43c-1.5-.472-2.6-1.747-2.738-3.284a9.96 9.96 0 00-9.904 0c-.138 1.537-1.238 2.812-2.738 3.284z" />
              </svg>
              <svg v-else-if="event.icon === 'music'" class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
              <svg v-else-if="event.icon === 'meet'" class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <svg v-else-if="event.icon === 'medal'" class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <svg v-else-if="event.icon === 'presentation'" class="w-5 h-5 md:w-6 md:h-6" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 12l3-3 3 3 4-4M8 21h8m-4-4v4M3 4h18M4 4h16v12H4V4z" />
              </svg>
              <svg v-else-if="event.icon === 'concert'" class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
              <svg v-else-if="event.icon === 'camera'" class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <svg v-else-if="event.icon === 'feast'" class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg v-else-if="event.icon === 'trophy'" class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z" />
              </svg>
              <svg v-else class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>

            <!-- Content Panel -->
            <div
              class="glass-panel p-6 md:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between group/card hover:shadow-2xl relative overflow-hidden"
              :class="event.type === 'highlight'
                ? 'border-gold bg-gradient-to-r from-gold/5 to-primary-dark/45 shadow-md shadow-gold/5'
                : 'border-gold/10 hover:border-gold/30'">
              <div v-if="event.type === 'highlight'"
                class="absolute -right-8 -top-8 w-24 h-24 bg-gold/10 rounded-full blur-xl pointer-events-none animate-pulse">
              </div>

              <div class="space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <span
                    class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gold/10 border border-gold/25 text-gold w-fit">
                    ⏰ {{ event.time }}
                  </span>
                  <span
                    class="text-[10px] text-gold-light bg-gold/5 border border-gold/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-extrabold w-fit sm:self-center">
                    {{ event.tag }}
                  </span>
                </div>

                <h3
                  class="text-xl font-serif font-black text-white group-hover/card:text-gold transition-colors tracking-wide leading-snug">
                  {{ event.title }}
                </h3>

                <p class="text-sm text-slate-300 leading-relaxed font-light">
                  {{ event.description }}
                </p>
              </div>

              <div
                class="mt-6 pt-4 border-t border-gold/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <span class="text-slate-400 font-medium inline-flex items-center">
                  📍 <strong class="text-slate-300 ml-1">{{ copy.venueLabel }}</strong> {{ event.venue }}
                </span>
                <span v-if="event.type === 'highlight'"
                  class="text-xs font-black text-primary-dark bg-gradient-to-r from-gold-light via-gold to-gold-dark px-3 py-1 rounded-md shadow-md animate-pulse uppercase tracking-wider">
                  ⭐ {{ 'বিশেষ আয়োজন' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Registration Banner Callout (VIP Ticket Concept) -->
      <div
        class="relative max-w-4xl mx-auto rounded-2xl p-8 border border-gold/25 bg-gradient-to-br from-gold/10 via-primary-dark/90 to-primary-light/5 shadow-2xl overflow-hidden group transition-all duration-300 hover:border-gold/55 gold-glow flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Ticket cutouts on the sides (aesthetic desktop-only details) -->
        <div class="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-primary-dark border-r border-t border-b border-gold/25 rounded-r-full"></div>
        <div class="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-primary-dark border-l border-t border-b border-gold/25 rounded-l-full"></div>

        <!-- Glowing highlights -->
        <div class="absolute -right-24 -bottom-24 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute left-1/4 top-1/4 w-32 h-32 bg-primary-light/15 rounded-full blur-3xl pointer-events-none"></div>

        <div class="flex items-center space-x-5 z-10 flex-col md:flex-row text-center md:text-left gap-4 md:gap-0">
          <!-- Ticket/Celebration Icon -->
          <div class="w-14 h-14 rounded-xl bg-gradient-to-tr from-gold-dark via-gold to-gold-light text-primary-dark flex items-center justify-center shadow-lg border border-white/20 shrink-0">
            <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
          </div>
          
          <div class="space-y-2">
            <span class="text-[10px] font-bold tracking-widest text-gold uppercase px-2.5 py-0.5 bg-gold/10 border border-gold/20 rounded-full inline-block">
              🎟️ উৎসবের গেস্ট পাস
            </span>
            <h3 class="font-serif font-black text-xl text-white">
              {{ copy.scheduleCtaTitle }}
            </h3>
            <p class="text-sm text-slate-300 max-w-lg leading-relaxed font-light">
              {{ copy.scheduleCtaDesc }}
            </p>
          </div>
        </div>
        
        <!-- Ticket dotted divider on desktop -->
        <div class="hidden md:block h-16 w-0 border-r-2 border-dashed border-gold/25 mx-2"></div>

        <NuxtLink to="#footer"
          class="shrink-0 px-7 py-3.5 bg-gradient-to-r from-gold-light via-gold to-gold-dark hover:from-gold hover:to-gold-dark text-primary-dark font-black text-sm rounded-lg shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 z-10 hover:shadow-gold/15">
          {{ copy.scheduleCtaBtn }}
        </NuxtLink>
      </div>
    </section>

      <!-- DISTINGUISHED ALUMNI SECTION (প্রাক্তন ছাত্র) -->
    <section id="alumni" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-24">
      <div class="text-center max-w-3xl mx-auto space-y-4">

        <div class="mb-6">
          <span
            class="text-xs font-bold tracking-widest text-gold uppercase px-3 py-1 bg-gold/10 border border-gold/20 rounded-full">
            {{ copy.alumniSectionBadge }}
          </span>
        </div>
        <h2 class="text-3xl md:text-5xl font-serif font-black text-white tracking-wide leading-tight">
          {{ copy.alumniSectionTitlePrefix }}
          <span class="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
            {{ copy.alumniSectionTitleSuffix }}
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark mx-auto my-6"></div>
        <p class="text-slate-300 text-sm md:text-base leading-relaxed font-light">
          {{ copy.alumniSectionDesc }}
        </p>
      </div>

      <!-- Alumni Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <AlumniCard v-for="(alumnus, idx) in alumniData" :key="idx" :alumnus="alumnus" />
      </div>


    </section>
    <!-- Quick Sections Navigation Map -->
    <!-- <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="text-center space-y-2">
        <h2 class="font-serif font-black text-3xl text-gold tracking-wide">
          {{ copy.portalTitle }}
        </h2>
        <p class="text-slate-400 text-xs sm:text-sm font-light">
          {{ copy.portalDescription }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink v-for="card in portalCards" :key="card.path" :to="card.path"
          class="glass-panel p-6 rounded-xl hover:border-gold/45 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between">
          <div class="space-y-3">
            <div
              class="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold border border-gold/20">
              {{ card.icon }}
            </div>
            <h3 class="font-serif font-bold text-lg text-white group-hover:text-gold transition-colors">
              {{ card.title }}
            </h3>
            <p class="text-xs text-slate-300 leading-relaxed font-light">
              {{ card.description }}
            </p>
          </div>
          <span
            class="inline-flex items-center text-xs text-gold-light mt-4 font-semibold group-hover:translate-x-1 transition-transform">
            {{ card.linkText }}
          </span>
        </NuxtLink>
      </div>
    </section> -->

  

    <!-- HISTORIC JOURNEY SECTION (ইতিহাস) -->
    <section id="history" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-24">
      <div class="text-center max-w-3xl mx-auto space-y-4">

        <div class="mb-6">
          <span
            class="text-xs font-bold tracking-widest text-gold uppercase px-3 py-1 bg-gold/10 border border-gold/20 rounded-full">
            {{ copy.historySectionBadge }}
          </span>
        </div>
        <h2 class="text-3xl md:text-5xl font-serif font-black text-white tracking-wide leading-tight">
          {{ copy.historySectionTitlePrefix }}
          <span class="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
            {{ copy.historySectionTitleSuffix }}
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark mx-auto my-6"></div>
        <p class="text-slate-300 text-sm md:text-base leading-relaxed font-light">
          {{ copy.historySectionDesc }}
        </p>
      </div>

      <!-- Timeline Container -->
      <div class="relative w-full py-10">
        <!-- Central Line Track (Desktop Only) -->
        <div
          class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/10 via-gold/45 to-gold/10 transform -translate-x-1/2 hidden md:block">
        </div>

        <!-- Mobile Line Track -->
        <div
          class="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/10 via-gold/45 to-gold/10 transform -translate-x-1/2 md:hidden">
        </div>

        <!-- Loop through timeline milestones -->
        <div class="space-y-4 relative">
          <TimelineItem v-for="(milestone, idx) in historyData" :key="milestone.year" :milestone="milestone"
            :index="idx" />
        </div>
      </div>
    </section>

      <!-- ACHIEVEMENTS SECTION (সাফল্যসমূহ) -->
    <section id="achievements" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-24">
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="mb-6">
          <span
            class="text-xs font-bold tracking-widest text-gold uppercase px-3 py-1 bg-gold/10 border border-gold/20 rounded-full">
            {{ copy.achievementsSectionBadge }}
          </span>
        </div>

        <h2 class="text-3xl md:text-5xl font-serif font-black text-white tracking-wide leading-tight">
          {{ copy.achievementsSectionTitlePrefix }}
          <span class="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
            {{ copy.achievementsSectionTitleSuffix }}
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark mx-auto my-6"></div>
        <p class="text-slate-300 text-sm md:text-base leading-relaxed font-light">
          {{ copy.achievementsSectionDesc }}
        </p>
      </div>

      <!-- Achievements Tally Board -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <div v-for="stat in tallies" :key="stat.key"
          class="glass-panel p-6 rounded-xl border border-gold/15 text-center transition-all duration-300 hover:border-gold/30 hover:-translate-y-1 shadow-md">
          <div class="text-3xl md:text-4xl font-serif font-black text-gold mb-1">
            {{ stat.number }}
          </div>
          <div class="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest font-semibold">
            {{ stat.label }}
          </div>
        </div>
      </div>

      <!-- Achievements Detail Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        <div v-for="award in achievementsList" :key="award.key"
          class="glass-panel p-8 rounded-2xl border border-gold/10 hover:border-gold/30 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl relative overflow-hidden">
          <div
            class="absolute -right-8 -top-8 w-24 h-24 bg-gold/5 rounded-full blur-xl pointer-events-none group-hover:bg-gold/10 transition-colors">
          </div>

          <div class="space-y-4">
            <div class="flex items-center space-x-3.5">
              <div
                class="w-12 h-12 bg-gradient-to-br from-gold-light via-gold to-gold-dark text-primary-dark rounded-xl flex items-center justify-center shadow-lg border border-white/20">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="award.icon"></svg>
              </div>
              <div>
                <span class="text-[10px] text-gold-light font-bold uppercase tracking-widest block">
                  {{ award.category }}
                </span>
                <span class="text-xs text-slate-400">
                  {{ award.span }}
                </span>
              </div>
            </div>

            <h3 class="text-xl font-serif font-bold text-white group-hover:text-gold transition-colors tracking-wide">
              {{ award.title }}
            </h3>

            <p class="text-sm text-slate-300 leading-relaxed font-light">
              {{ award.description }}
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-gold/10 flex items-center justify-between text-xs font-semibold">
            <span class="text-slate-400">
              {{ 'পুরস্কারের ধরন:' }}
            </span>
            <span class="text-gold-light bg-gold/10 border border-gold/20 px-2.5 py-0.5 rounded-full">
              {{ award.status }}
            </span>
          </div>
        </div>
      </div>

      <!-- CTA to gallery -->
      <!-- <div class="text-center pt-4">
        <p class="text-slate-400 text-sm mb-4">
          {{ copy.achievementsCtaText }}
        </p>
        <NuxtLink to="/gallery"
          class="inline-flex items-center space-x-2 text-gold font-semibold hover:text-gold-light group transition-colors">
          <span>{{ copy.achievementsCtaLinkText }}</span>
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </NuxtLink>
      </div> -->
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import historyData from '~/data/history.json'
import alumniData from '~/data/alumni.json'
import eventsData from '~/data/events.json'

const principalImgError = ref(false)

// Reactivity for Alumni Spotlight search
const searchQuery = ref('')

// Reactivity for Event Schedule
const activeEventDay = ref('day1')
const eventSearchQuery = ref('')

const filteredEvents = computed(() => {
  const currentDay = eventsData.find(d => d.day === activeEventDay.value)
  if (!currentDay) return []

  if (!eventSearchQuery.value) return currentDay.events

  const query = eventSearchQuery.value.toLowerCase().trim()
  return currentDay.events.filter(e => {
    const title = e.title.toLowerCase()
    const desc = e.description.toLowerCase()
    const venue = e.venue.toLowerCase()
    const tag = e.tag.toLowerCase()

    return (
      title.includes(query) ||
      desc.includes(query) ||
      venue.includes(query) ||
      tag.includes(query)
    )
  })
})

useHead({
  title: 'পূর্ণ মিলন অনুষ্ঠান - ছাতীয়ানী রোকেয়া ওবেদুল হক উচ্চ বিদ্যালয়',
  meta: [
    {
      name: 'description',
      content: 'ছাতীয়ানী রোকেয়া ওবেদুল হক উচ্চ বিদ্যালয়ের পূর্ণ মিলন অনুষ্ঠান অফিসিয়াল ওয়েবসাইটে আপনাকে স্বাগতম।'
    }
  ]
})

const copy = {
  anniversaryBanner: '✨ ছাতীয়ানী রোকেয়া ওবেদুল হক উচ্চ বিদ্যালয়ের পূর্ণ মিলন অনুষ্ঠান ✨',
  heroBadge: 'পূর্ণ মিলন অনুষ্ঠান',
  heroTitleLine1: 'মেধার বিকাশ,',
  heroTitleLine2: 'ভবিষ্যৎ নির্মাণ -',
  heroTitleLine3Prefix: 'গৌরবের ',
  heroTitleLine3Highlight: 'পূর্ণ মিলন অনুষ্ঠান।',
  heroDescription: 'ছাতীয়ানী রোকেয়া ওবেদুল হক উচ্চ বিদ্যালয়ে আপনাকে স্বাগত। ১৯৭৫ সাল থেকে আমরা প্রাতিষ্ঠানিক নেতৃত্ব, উদ্ভাবনী চিন্তা এবং নৈতিক সততা বিকাশের মাধ্যমে শিক্ষার্থীদের একটি সুন্দর পৃথিবী গড়ে তুলতে সক্ষম করে তুলছি।',
  heroCtaHistory: 'আমাদের ইতিহাস জানুন',
  heroCtaContact: 'অনুষ্ঠান সময়সূচী',
  sealText: 'ছাতীয়ানী রোকেয়া ওবেদুল হক উচ্চ বিদ্যালয় • পূর্ণ মিলন অনুষ্ঠান • স্থাপিত ১৯৭৫ •',
  ribbonText: '🏆 পূর্ণ মিলন অনুষ্ঠান',
  principalName: 'নুর মোহাম্মদ বিএসসি',
  principalDesignation: 'প্রধান শিক্ষক, ছাতীয়ানী রোকেয়া ওবেদুল হক উচ্চ বিদ্যালয়',
  principalAddressTitle: 'প্রধান শিক্ষকের স্বাগত বক্তব্য',
  principalParagraph1: '"প্রিয় শিক্ষার্থী, প্রাক্তন ছাত্র-ছাত্রী, অভিভাবক ও শুভানুধ্যায়ীবৃন্দ, অত্যন্ত কৃতজ্ঞতা এবং গভীর গর্বের সাথে আমরা আমাদের পূর্ণ মিলন অনুষ্ঠান উদযাপন করছি। প্রতিষ্ঠালগ্ন থেকে, প্রাতিষ্ঠানিক উৎকর্ষ এবং নৈতিক নেতৃত্ব বিকাশের আকাঙ্ক্ষা নিয়ে ছাতীয়ানী রোকেয়া ওবেদুল হক উচ্চ বিদ্যালয় প্রতিষ্ঠিত হয়েছিল। আজ আমাদের গ্র্যাজুয়েটরা পৃথিবীর সব প্রান্তে ছড়িয়ে আছেন এবং প্রজ্ঞা, সহমর্মিতা ও সাহসের সাথে সমাজ বিনির্মাণে অবদান রাখছেন।"',
  principalParagraph2: '"এই পূর্ণ মিলন অনুষ্ঠানটি কেবল আমাদের ঐতিহাসিক অর্জনের প্রতিফলনই নয়, বরং এটি আমাদের ডিজিটাল ও টেকসই ভবিষ্যতের ভিত্তি। ২০২৬ সালে নির্ধারিত আমাদের পূর্ণ মিলন অনুষ্ঠানের মাধ্যমে এই ঐতিহাসিক মুহূর্তটি উদযাপনে আমাদের সাথে যোগ দেওয়ার জন্য আপনাদের সাদর আমন্ত্রণ জানাচ্ছি।"',
  principalSignature: 'নুর মোহাম্মদ বিএসসি',
  portalTitle: 'আমাদের পূর্ণ মিলন অনুষ্ঠান অন্বেষণ করুন',
  portalDescription: 'আমাদের স্কুল পোর্টালের মূল বিভাগ এবং আর্কাইভে সরাসরি নেভিগেট করুন',
  achievementsSectionBadge: 'সম্মাননা প্রাঙ্গণ',
  achievementsSectionTitlePrefix: 'বিজয় ও সম্মানের ',
  achievementsSectionTitleSuffix: 'পূর্ণ মিলন অনুষ্ঠান',
  achievementsSectionDesc: 'ছাতীয়ানী রোকেয়া ওবেদুল হক উচ্চ বিদ্যালয় সর্বদা মেধার লালন ও বিকাশে প্রতিশ্রুতিবদ্ধ। শিক্ষা, ক্রীড়া, জাতীয় অলিম্পিয়াড ও পরিবেশগত সুরক্ষায় আমাদের শিক্ষার্থীদের গৌরবময় বিজয়গুলো এখানে সম্মানিত করা হয়েছে।',
  achievementsCtaText: 'আমাদের ক্রীড়াবিদ ও পুরস্কার বিতরণীর সরাসরি চিত্র দেখতে চান?',
  achievementsCtaLinkText: 'চ্যাম্পিয়নশিপ গ্যালারি আর্কাইভ দেখুন',
  historySectionBadge: 'আমাদের সোনালী যাত্রা',
  historySectionTitlePrefix: 'বিদ্যালয় প্রতিষ্ঠার ',
  historySectionTitleSuffix: 'গৌরবময় ইতিহাস',
  historySectionDesc: '১ জানুয়ারি, ১৯৭৩ সালে বালিকা বিদ্যালয় হিসেবে আমাদের পথচলা শুরু হয়েছিল এবং পরবর্তীতে সহশিক্ষা কার্যক্রম চালুর মাধ্যমে এটি একটি পূর্ণাঙ্গ বিদ্যাপীঠে পরিণত হয়। বিদ্যালয় প্রতিষ্ঠার ইতিহাস, জমিদান ও এলাকার মানুষের অতুলনীয় অবদানের গৌরবময় ইতিহাস নিচে তুলে ধরা হলো।',
  historyCalloutTitle: 'আমাদের ভবিষ্যতের অংশ হোন',
  historyCalloutDesc: 'আমরা আমাদের পূর্ণ মিলন অনুষ্ঠান উদ্‌যাপন করার পাশাপাশি আগামী দিনের জন্য অসাধারণ মেধা তৈরি এবং পরবর্তী প্রজন্মকে গড়ে তুলতে উন্মুখ।',
  historyCalloutLink: 'আমাদের সাথে যুক্ত হন',
  alumniSectionBadge: 'আলোকপাত সিরিজ',
  alumniSectionTitlePrefix: 'আমাদের কৃতী ',
  alumniSectionTitleSuffix: 'প্রাক্তন ছাত্র নেটওয়ার্ক',
  alumniSectionDesc: 'ছাতীয়ানী রোকেয়া ওবেদুল হক উচ্চ বিদ্যালয় থেকে যাত্রা শুরু করে আজ বিশ্বজুড়ে অবদান রাখছেন এমন কিছু অসামান্য প্রাক্তন শিক্ষার্থীর সাথে পরিচিত হোন। আমাদের গ্র্যাজুয়েটরা বিভিন্ন শিল্পক্ষেত্রে গুরুত্বপূর্ণ অবদান রাখছেন এবং সততার সাথে নেতৃত্ব দিচ্ছেন।',
  alumniSearchPlaceholder: 'নাম, ব্যাচ বছর (যেমন: ১৯৮৮) অথবা পেশা দিয়ে খুঁজুন...',
  alumniQuickTagsLabel: 'জনপ্রিয় ট্যাগ:',
  alumniEmptyTitle: 'কোনো প্রোফাইল পাওয়া যায়নি',
  alumniEmptyDescription: 'দুঃখিত, আমরা আপনার অনুসন্ধানের সাথে মেলানো কোনো প্রোফাইল খুঁজে পাইনি',
  alumniEmptyBtn: 'অনুসন্ধান রিসেট করুন',
  alumniCalloutTitle: 'আপনি কি আমাদের বিদ্যালয়ের প্রাক্তন শিক্ষার্থী?',
  alumniCalloutDesc: 'আমাদের গৌরবময় পূর্ণ মিলন অনুষ্ঠান উপলক্ষে আমরা একটি বৈশ্বিক প্রাক্তন ছাত্র ডিরেক্টরি তৈরি করছি। আপনার বর্তমান পেশা, ব্যাচ বছর এবং অমূল্য স্মৃতি জমা দিন!',
  alumniCalloutBtn: 'ডিরেক্টরিতে যুক্ত হোন',
  scheduleSectionBadge: 'মহোৎসব কার্যক্রম',
  scheduleSectionTitlePrefix: 'পূর্ণ মিলন ',
  scheduleSectionTitleSuffix: 'অনুষ্ঠান সময়সূচী',
  scheduleSectionDesc: 'ছাতীয়ানী রোকেয়া ওবেদুল হক উচ্চ বিদ্যালয়ের পূর্ণ মিলন অনুষ্ঠানের বর্ণাঢ্য ১ দিনের পূর্ণাঙ্গ ও চমৎকার অনুষ্ঠান সময়সূচী এখানে তুলে ধরা হয়েছে।',
  scheduleSearchPlaceholder: 'অনুষ্ঠান, বিষয়বস্তু বা স্থান লিখে খুঁজুন...',
  scheduleSearchEmpty: 'অনুসন্ধানের সাথে মেলে এমন কোনো অনুষ্ঠান পাওয়া যায়নি।',
  scheduleSearchEmptyBtn: 'অনুসন্ধান রিসেট করুন',
  venueLabel: 'স্থান: ',
  tagLabel: 'ক্যাটাগরি: ',
  scheduleCtaTitle: 'মহোৎসবের সরাসরি অংশীদার হোন',
  scheduleCtaDesc: 'পূর্ণ মিলন অনুষ্ঠানে যোগ দিতে এখনই নিবন্ধন সম্পন্ন করুন এবং আপনার গেস্ট পাস সংগ্রহ করুন!',
  scheduleCtaBtn: 'রেজিস্ট্রেশন করুন'
}

const stats = [
  {
    key: 'established',
    number: '১৯৭৫',
    label: 'স্থাপিত বছর'
  },
  {
    key: 'alumni',
    number: '১০ হাজার+',
    label: 'বৈশ্বিক প্রাক্তন শিক্ষার্থী'
  },
  {
    key: 'educators',
    number: '৪৫+',
    label: 'দক্ষ শিক্ষক'
  },
  {
    key: 'trophies',
    number: '৩৫+',
    label: 'স্বর্ণপদক ও ট্রফি'
  }
]

const portalCards = [
  {
    path: '#achievements',
    icon: '🏆',
    title: 'সাফল্য ও ক্রীড়া',
    description: 'আমাদের প্রাতিষ্ঠানিক পুরস্কার, অ্যাথলেটিক্সে স্বর্ণপদক, বিজ্ঞান মেলা এবং সাংস্কৃতিক বিজয়ের বিবরণী দেখুন।',
    linkText: 'সাফল্য দেখুন ↓'
  },
  {
    path: '#history',
    icon: '📅',
    title: 'দশকের টাইমলাইন',
    description: '১৯৭৫ সালে আমাদের প্রতিষ্ঠা থেকে শুরু করে ২০২৫ সালে আধুনিক ক্যাম্পাস পর্যন্ত আমাদের গৌরবময় ইতিহাস দশকের ভিত্তিতে জানুন।',
    linkText: 'ইতিহাস দেখুন ↓'
  },
  {
    path: '#alumni',
    icon: '👥',
    title: 'বিশিষ্ট প্রাক্তন শিক্ষার্থী',
    description: 'আমাদের সেইসব কৃতি প্রাক্তন শিক্ষার্থীদের অর্জন ও বক্তব্য দেখুন যারা এখান থেকে পাস করে দেশ-বিদেশে অবদান রাখছেন।',
    linkText: 'ডিরেক্টরি দেখুন ↓'
  },
  {
    path: '#schedule',
    icon: '⏰',
    title: 'অনুষ্ঠান সময়সূচী',
    description: 'পূর্ণ মিলন অনুষ্ঠানের বিস্তারিত সময়সূচী, বিষয়বস্তু এবং স্থান দেখুন।',
    linkText: 'সময়সূচী দেখুন ↓'
  },
  {
    path: '/gallery',
    icon: '🖼',
    title: 'মিডিয়া গ্যালারি',
    description: 'আমাদের ক্লাসিক ও আধুনিক ছবি সংগ্রহ, ক্রীড়া প্রতিযোগিতা, সাংস্কৃতিক অনুষ্ঠান এবং অন্যান্য উৎসবের চিত্র দেখুন।',
    linkText: 'ছবি দেখুন →'
  },

  {
    path: '#footer',
    icon: '📍',
    title: 'ঠিকানা ও সহায়তা',
    description: 'ভর্তি প্রক্রিয়া, ঐতিহাসিক তথ্য, যাতায়াতের রুট এবং যোগাযোগের বিষয়ে সরাসরি সহায়তা ও তথ্য পান।',
    linkText: 'যোগাযোগ করুন →'
  }
]

// Achievements tallies and items list
const tallies = [
  {
    key: 'cups',
    number: '৪৮ +',
    label: 'সোনার শিল্ড ও কাপ'
  },
  {
    key: 'grads',
    number: '৯৮.৪%',
    label: 'প্রথম বিভাগে উত্তীর্ণ'
  },
  {
    key: 'olympiad',
    number: '১৫ +',
    label: 'জাতীয় অলিম্পিয়াড জয়ী'
  },
  {
    key: 'eco',
    number: '১ম স্থান',
    label: 'সবুজ ক্যাম্পাস রেটিং'
  }
]

const achievementsList = [
  {
    key: 'scholastic',
    category: 'শিক্ষা ক্ষেত্রে উৎকর্ষ',
    span: '১৯৭৫ - বর্তমান',
    title: 'শিক্ষাগত উৎকর্ষের স্বর্ণপদক',
    description: 'আমাদের শিক্ষার্থীরা ধারাবাহিকভাবে জাতীয় স্তরে সেরা ফলাফল অর্জন করে আসছে। আমাদের প্রতিষ্ঠার পর থেকে ৯৮%-এরও বেশি শিক্ষার্থী উচ্চশিক্ষার জন্য দেশের সেরা বিশ্ববিদ্যালয়সমূহে স্থান করে নিয়েছে এবং ৫ জন জাতীয় বৈজ্ঞানিক গবেষণা পুরস্কার বিজয়ী তৈরি হয়েছে।',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />',
    status: 'গৌরবময় রেকর্ড'
  },
  {
    key: 'athletic',
    category: 'ক্রীড়া ক্ষেত্রে আধিপত্য',
    span: '২০২০ - ২০২৫',
    title: 'ত্রিমুকুট ফুটবল ও অ্যাথলেটিক্স চ্যাম্পিয়ন',
    description: 'আমাদের শারীরিক শিক্ষা কার্যক্রম চমৎকার ক্রীড়াশৈলী গড়ে তোলে। স্কুলের ফুটবল দল টানা তিন বছর (২০২৩, ২০২৪, ২০২৫) জেলা ক্রীড়া প্রতিযোগিতায় চ্যাম্পিয়নশিপ ট্রফি জিতেছে। এছাড়াও আমাদের দৌড়বিদরা ট্র্যাক ইভেন্টগুলোতে একাধিক নতুন রেকর্ড স্থাপন করেছে।',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7.464 1.258a9.99 9.99 0 00-1.032 3.43c.094.02.186.043.278.07 1.547.458 2.664 1.763 2.766 3.328a9.96 9.96 0 004.952 2.67 9.99 9.99 0 004.952-2.67c.102-1.565 1.22-2.87 2.766-3.328.092-.027.184-.05.278-.07a9.99 9.99 0 00-1.032-3.43c-1.5-.472-2.6-1.747-2.738-3.284a9.96 9.96 0 00-9.904 0c-.138 1.537-1.238 2.812-2.738 3.284z" />',
    status: 'বর্তমান চ্যাম্পিয়ন'
  },
  {
    key: 'cultural',
    category: 'সাংস্কৃতিক ও শিল্পকলা',
    span: '১৯৯৫ - বর্তমান',
    title: 'জাতীয় সংগীত ও চিত্রাঙ্কন প্রতিযোগিতা জয়ী',
    description: 'আমরা বিশ্বাস করি পাঠ্যক্রমের মতোই শিল্প ও স্ব-প্রকাশ গুরুত্বপূর্ণ। আমাদের স্কুল সংগীত দল জাতীয় সংগীত উৎসবে তিনবার প্রথম পুরস্কার অর্জন করেছে। শিক্ষার্থীদের তৈরি চারু ও কারুকলা প্রজেক্টগুলো জেলা পর্যায়ের বার্ষিক প্রদর্শনীতে নিয়মিত প্রদর্শিত হয়।',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />',
    status: 'উচ্চ প্রশংসিত'
  },
  {
    key: 'green',
    category: 'পরিবেশ বান্ধব নেতৃত্ব',
    span: '২০১৫ - ২০২৫',
    title: 'সেরা সবুজ স্মার্ট ক্যাম্পাস ট্রফি',
    description: 'পরিবেশ বান্ধব মাধ্যমিক শিক্ষার পথিকৃৎ। ২০১৮ সালে স্কুলটি সম্পূর্ণ সৌরবিদ্যুৎ চালিত স্মার্ট ক্যাম্পাসে রূপান্তরের জন্য জাতীয় গ্রীন ক্যাম্পাস শিল্ড লাভ করে। আমরা ক্যাম্পাসে কাগজবিহীন ডিজিটাল লার্নিং বোর্ড এবং জিরো-ওয়েস্ট নীতি অনুসরণ করি।',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />',
    status: '১ম র‍্যাঙ্ক প্রাপ্ত'
  }
]

// Alumni dynamic filtration computed properties
const quickTags = ['১৯৮৮', '১৯৯৭', '২০০৫', '২০১২', 'সার্জন', 'উদ্যোক্তা', 'ঔপন্যাসিক']

const filteredAlumni = computed(() => {
  if (!searchQuery.value) return alumniData

  const rawQuery = searchQuery.value.toLowerCase().trim()

  // Normalized digits map to enable searching batches in both english and bengali
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']
  let normalizedQuery = rawQuery
  for (let i = 0; i < 10; i++) {
    normalizedQuery = normalizedQuery.replace(new RegExp(bnDigits[i], 'g'), i.toString())
  }

  return alumniData.filter(alumnus => {
    const name = alumnus.name.toLowerCase()
    const batch = alumnus.batch.toLowerCase()
    const profession = alumnus.profession.toLowerCase()
    const message = alumnus.message.toLowerCase()

    return (
      name.includes(rawQuery) ||
      batch.includes(normalizedQuery) ||
      profession.includes(rawQuery) ||
      message.includes(rawQuery)
    )
  })
})


</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.25s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
