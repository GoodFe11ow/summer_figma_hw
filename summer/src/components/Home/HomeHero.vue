<template>
    <div class="bg-[#001412] w-full h-full pt-[160px] md:pt-[183px] xl:py-[268px] pb-32 md:pb-39 lg:pb-60"  :style="{ backgroundImage: `url(${bgImage}`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}">
        <div class="text-white flex flex-col justify-between items-center text-center md:px-8 lg:px-20">
            <h2 class="text-[40px] font-semibold pb-10 md:text-[64px]/[80px] xl:text-[100px]/[120px] xl:font-normal">We Build High-Converting Websites That Deliver Results</h2>
            <div class="flex flex-col gap-5 w-[212px] md:w-[456px] md:flex-row">
                <button class="w-full h-[70px] bg-[#00A693] hover:bg-[rgb(73,185,176)]">Book a Call</button>
                <button class="w-full h-[70px] bg-[#004B49] hover:bg-[#1f3f3e]">See our Works<i class="fa-solid fa-arrow-right pl-3 fa-xl"></i></button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import bgImage from '../../assets/bgHome.jpg'
</script>