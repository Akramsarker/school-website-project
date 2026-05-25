<template>
  <div 
    class="min-h-screen flex flex-col bg-primary-dark text-white selection:bg-gold selection:text-primary-dark font-bangla text-[18px] tracking-wide"
  >
    <!-- Navbar -->
    <AppNavbar />

    <!-- Main Content Area -->
    <main class="flex-grow pt-20">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
</script>

<style>
/* Page transition animation classes */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
