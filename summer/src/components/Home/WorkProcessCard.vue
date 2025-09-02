<template>
    <div class="flex gap-3">
        <div class="w-5 flex flex-col items-center">
            <div class="w-5 h-5 rounded-full border-white border-3 z-[1] bg-[#99DBD4]"></div>
        </div>
        <div class="bg-[#008576] px-[20px] py-[28px]">
            <h2 class="text-[32px] font-semibold"> {{ process.title }}</h2>
            <p>{{ process.description }}</p>
        </div>
    </div>
</template>

<script setup>
    const process = defineProps({
        title: String,
        description: String
    })
</script>