<template>
    <div class="bg-[#00211D] mb-8">
        <div class="pt-8 pl-8">
            <div class="bg-[#004B49] flex justify-center items-center w-20 h-20 rounded-full">
                <div class="w-10 h-10"  v-html="svgIcon"></div>
            </div>
        </div>
        <div class="px-8 pt-6 pb-10">
            <h3 class="text-3xl font-semibold text-white mb-4">{{ role }}</h3>
            <p class="text-white font-extralight text-[18px]">{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        svgIcon: String,
        role: String,
        description: String
    })
</script>