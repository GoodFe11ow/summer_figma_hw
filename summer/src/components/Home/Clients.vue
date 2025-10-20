<template>
    <div class="bg-[#001412] text-white px-[6%] py-[25%] md:px-[4%] md:py-[13%] lg:px-[6%] lg:py-[8%] xl:px-[7%] xl:py-[7%]">
        <div class="mb-15 md:mb-35">
            <h1 class="text-[36px] text-center md:text-[48px] md:font-semibold lg:text-[56px]">Some of our awesome clients that we are proud to work with</h1>
        </div>
        <div class="-mx-[6%]">
            <ClientsCarousel />
        </div>
    </div>
</template>

<script setup>
    import ClientsCarousel from './ClientsCarousel.vue';
</script>