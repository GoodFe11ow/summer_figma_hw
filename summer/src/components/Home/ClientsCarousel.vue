<template>
  <div class="flex flex-col gap-15 md:gap-25">
      <div class="w-full overflow-hidden group">
        <div class="flex w-max animate-[scroll-left_15s_linear_infinite] group-hover:[animation-play-state:paused]">
          <div v-for="(logo, index) in duplicatedTopRow" :key="index" class="flex-shrink-0 flex items-center justify-center px-8">
            <img :src="logo.src" :alt="logo.alt" class="h-8 md:h-10 object-contain" />
          </div>
        </div>
      </div>

      <div class="w-full overflow-hidden group">
        <div class="flex w-max whitespace-nowrap animate-[scroll-right_15s_linear_infinite] group-hover:[animation-play-state:paused]">
          <div v-for="(logo, index) in duplicatedBottomRow" :key="index" class="flex-shrink-0 flex items-center justify-center px-8">
            <img :src="logo.src" :alt="logo.alt" class="h-8 md:h-10 object-contain" />
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
    import logo1 from '../../assets/logos/ferrari.svg';
    import logo2 from '../../assets/logos/Logo2.svg';
    import logo3 from '../../assets/logos/Logo3.svg';
    import logo4 from '../../assets/logos/Logo4.svg';
    import logo5 from '../../assets/logos/Logo5.svg';
    import logo6 from '../../assets/logos/Logo6.svg';
    import logo7 from '../../assets/logos/Logo7.svg';
    import logo8 from '../../assets/logos/porshe.svg';
    import logo9 from '../../assets/logos/tesla.svg';
    import logo10 from '../../assets/logos/Logo10.svg';
    
    import { ref, computed } from 'vue';

    const logos = ref([
        {src: logo1, alt: 'Ferrari'},
        { src: logo2, alt: 'Smart'},
        { src: logo3, alt: 'Cadillac'},
        { src: logo4, alt: 'Bentley'},
        { src: logo5, alt: 'Dodge'},
        { src: logo6, alt: 'Kia'},
        { src: logo7, alt: 'Jeep'},
        { src: logo8, alt: 'Porshe'},
        { src: logo9, alt: 'Tesla'},
        { src: logo10, alt: 'Ford'},
    ]);

    const half = Math.ceil(logos.value.length / 2); /** making logo row twice  */
    const topRowLogos = computed(() => logos.value.slice(0, half));
    const bottomRowLogos = computed(() => logos.value.slice(half));

    const duplicatedTopRow = computed(() => [...topRowLogos.value, ...topRowLogos.value]);
    const duplicatedBottomRow = computed(() => [...bottomRowLogos.value, ...bottomRowLogos.value]);
</script>

<style> /** animations for carousel */
  @keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes scroll-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
</style>