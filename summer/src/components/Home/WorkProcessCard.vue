<template>
    <div class="flex gap-3 lg:gap-[70px] lg:justify-end relative">
        <div class="w-5 flex flex-col items-center">
            <div class="w-5 h-5 rounded-full border-white border-3 z-[1] bg-[#99DBD4]"></div>
        </div>
        <div class="bg-[#008576] px-[20px] md:px-[32px] py-[28px] md:py-[40px] w-full lg:w-[49%] lg:py-[32px]">
            <h2 class="text-[32px] md:text-[36px] lg:text-[40px] font-semibold lg:absolute lg:left-[5%] xl:left-[7%] top-[-15px] lg:w-[290px]"> {{ process.title }}</h2>
            <p class="font-light md:text-[24px] lg:text-[20px] lg:mt-0 mt-4 md:mt-6">{{ process.description }}</p>
        </div>
    </div>
</template>

<script setup>
    const process = defineProps({
        title: String,
        description: String
    })
</script>   