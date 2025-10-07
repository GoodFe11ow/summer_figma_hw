<template>
    <div class="flex flex-col gap-8">
    <div class="w-full overflow-hidden">
      <div class="flex w-max animate-scroll-left group-hover:paused">
        <div v-for="(logo, index) in duplicatedTopRow" :key="index" class="flex-shrink-0 flex items-center justify-center px-8">
          <img :src="logo.src" :alt="logo.alt" class="h-8 md:h-10 object-contain" />
        </div>
      </div>
    </div>

    <div class="w-full overflow-hidden">
      <div class="flex w-max animate-scroll-right group-hover:paused">
        <div v-for="(logo, index) in duplicatedBottomRow" :key="index" class="flex-shrink-0 flex items-center justify-center px-8">
          <img :src="logo.src" :alt="logo.alt" class="h-8 md:h-10 object-contain" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    import logo2 from '../../assets/logos/Logo2.svg';
    import logo3 from '../../assets/logos/Logo3.svg';
    import logo4 from '../../assets/logos/Logo4.svg';
    import logo5 from '../../assets/logos/Logo5.svg';
    import logo6 from '../../assets/logos/Logo6.svg';
    import logo7 from '../../assets/logos/Logo7.svg';
    import logo10 from '../../assets/logos/Logo10.svg';
    
    import { ref, computed } from 'vue';

    const logos = ref([
        { src: logo2, alt: 'Smart'},
        { src: logo3, alt: 'Cadillac'},
        { src: logo4, alt: 'Bentley'},
        { src: logo5, alt: 'Dodge'},
        { src: logo6, alt: 'Kia'},
        { src: logo7, alt: 'Jeep'},
        { src: logo10, alt: 'Ford'},
    ]);

    const half = Math.ceil(logos.value.length / 2);
    const topRowLogos = computed(() => logos.value.slice(0, half));
    const bottomRowLogos = computed(() => logos.value.slice(half));

    const duplicatedTopRow = computed(() => [...topRowLogos.value, ...topRowLogos.value]);
    const duplicatedBottomRow = computed(() => [...bottomRowLogos.value, ...bottomRowLogos.value]);
</script>