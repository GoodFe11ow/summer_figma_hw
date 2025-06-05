<template>
  <div class="relative">
    <button
      @click="toggleMenu"
      class="p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
      aria-label="Toggle menu"
    >
      <svg
        v-if="!isMenuOpen"
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-4 6h4"></path>
      </svg>
      <svg
        v-else
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>

    <nav
      v-if="isMenuOpen"
      class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10"
    >
      <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Пункт 1</a>
      <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Пункт 2</a>
      <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Пункт 3</a>
      <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Пункт 4</a>
    </nav>
  </div>
</template>

<script setup>
    import { ref } from 'vue';

    const isMenuOpen = ref(false)
    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    }
</script>