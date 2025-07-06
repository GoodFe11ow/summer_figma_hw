<template>
  <div class="relative">
    <label>
      <div
        class="w-9 h-10 cursor-pointer flex flex-col items-center justify-center"
      >
        <input class="hidden peer" type="checkbox" v-model="isMenuOpen" />
        <div
          class="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"
        ></div>
        <div
          class="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden"
        ></div>
        <div
          class="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"
        ></div>
      </div>
    </label>


    <nav
      v-if="isMenuOpen"
      class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10"
    >
      <router-link to="/work" href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Work</router-link>
      <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Пункт 2</a>
      <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Пункт 3</a>
      <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Пункт 4</a>
    </nav>
  </div>
</template>

<script setup>
    import { ref } from 'vue';

    const isMenuOpen = ref(false)
</script>