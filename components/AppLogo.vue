<template>
  <div class="flex items-center select-none">
    <svg 
      viewBox="45 30 550 110" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      class="w-full h-auto max-h-full overflow-visible"
    >
      <defs>
        <!-- Main text gradient -->
        <linearGradient id="logoTextGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="40%" stop-color="#F3C63F"/>
          <stop offset="100%" stop-color="#D4AF37"/>
        </linearGradient>
        <!-- Superscript gradient -->
        <linearGradient id="logoSupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#F3C63F"/>
        </linearGradient>
        <!-- Glow filter -->
        <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="logoSupGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- A -->
      <text x="55" y="128" font-family="Orbitron, sans-serif" font-weight="900" font-size="100"
            fill="url(#logoTextGrad)" filter="url(#logoGlow)">A</text>
      <!-- ² after A -->
      <text x="133" y="72" font-family="Orbitron, sans-serif" font-weight="900" font-size="38"
            fill="url(#logoSupGrad)" filter="url(#logoSupGlow)">2</text>

      <!-- C -->
      <text x="155" y="128" font-family="Orbitron, sans-serif" font-weight="900" font-size="100"
            fill="url(#logoTextGrad)" filter="url(#logoGlow)">C</text>

      <!-- R -->
      <text x="238" y="128" font-family="Orbitron, sans-serif" font-weight="900" font-size="100"
            fill="url(#logoTextGrad)" filter="url(#logoGlow)">R</text>

      <!-- O -->
      <text x="322" y="128" font-family="Orbitron, sans-serif" font-weight="900" font-size="100"
            fill="url(#logoTextGrad)" filter="url(#logoGlow)">O</text>

      <!-- H -->
      <text x="413" y="128" font-family="Orbitron, sans-serif" font-weight="900" font-size="100"
            fill="url(#logoTextGrad)" filter="url(#logoGlow)">H</text>
      <!-- ² after H -->
      <text x="498" y="72" font-family="Orbitron, sans-serif" font-weight="900" font-size="38"
            fill="url(#logoSupGrad)" filter="url(#logoSupGlow)">2</text>

      <!-- S -->
      <text x="518" y="128" font-family="Orbitron, sans-serif" font-weight="900" font-size="100"
            fill="url(#logoTextGrad)" filter="url(#logoGlow)">S</text>
    </svg>
  </div>
</template>
