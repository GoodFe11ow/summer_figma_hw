<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BurgerMenu from './BurgerMenu.vue'

const route = useRoute()
const onHome = ref(route.path === '/')

watch(
  () => route.path,
  (newPath) => {
    onHome.value = newPath === '/'
  }
)
</script>

<template>
  <div
    class="absolute w-full flex justify-between items-center px-5 md:px-8 lg:px-10 xl:px-[10%] z-50"
  >
    <router-link to="/">
      <h3
        :class="[
          'text-[28px] md:text-[36px] font-medium transition-colors duration-300',
          onHome ? 'text-white' : 'text-[#008576]'
        ]"
      >
        Nitro
      </h3>
    </router-link>

    <!-- Pass dynamic icon color and bgIsLight -->
    <BurgerMenu
      :icon-color="onHome ? 'bg-white' : 'bg-[#008576]'"
      :bg-is-light="!onHome"
    />
  </div>
</template>
