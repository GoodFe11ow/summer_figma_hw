<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  iconColor: {
    type: String,
    default: "bg-white", // color of bars (passed from navbar)
  },
  bgIsLight: {
    type: Boolean,
    default: false, // whether the background is light
  },
});

const isMenuOpen = ref(false);
const menuRef = ref(null);

const handleClickOutside = (event) => {
  if (isMenuOpen.value && menuRef.value && !menuRef.value.contains(event.target)) {
    isMenuOpen.value = false;
  }
};

onMounted(() => document.addEventListener("click", handleClickOutside));
onBeforeUnmount(() => document.removeEventListener("click", handleClickOutside));
</script>

<template>
  <div class="relative flex items-center" ref="menuRef">
    <!-- Burger Icon -->
    <div
      class="w-9 h-10 flex flex-col justify-center items-center cursor-pointer z-50"
      @click.stop="isMenuOpen = !isMenuOpen"
    >
      <span
        :class="[
          'block w-8 h-[2px] rounded transition-all duration-300 ease-in-out',
          isMenuOpen ? 'rotate-45 translate-y-[7px]' : '',
          iconColor
        ]"
      ></span>

      <span
        :class="[
          'block w-8 h-[2px] rounded my-[6px] transition-all duration-300 ease-in-out',
          isMenuOpen ? 'opacity-0' : 'opacity-100',
          iconColor
        ]"
      ></span>

      <span
        :class="[
          'block w-8 h-[2px] rounded transition-all duration-300 ease-in-out',
          isMenuOpen ? '-rotate-45 -translate-y-[7px]' : '',
          iconColor
        ]"
      ></span>
    </div>

    <!-- Dropdown Menu -->
    <nav
      v-if="isMenuOpen"
      class="absolute right-0 top-12 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-40"
    >
      <router-link
        to="/work"
        class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
        @click="isMenuOpen = false"
      >
        Work
      </router-link>
      <router-link
        to="/privacy-policy"
        class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
        @click="isMenuOpen = false"
      >
        Privacy Policy
      </router-link>
      <router-link
        to="/contact"
        class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
        @click="isMenuOpen = false"
      >
        Contact Us
      </router-link>
    </nav>
  </div>
</template>
