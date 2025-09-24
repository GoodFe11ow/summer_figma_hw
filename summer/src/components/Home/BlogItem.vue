<template>
    <div class="flex w-full gap-8">
        <div class="w-sreen">
            <img :src="image" alt="" class=" object-cover mb-[20px]">
            <div v-if="props.tags && props.tags.length > 0" class="mb-[24px] flex justify-between">
              <span v-for="(tag, index) in props.tags" :key="index" class="bg-[#006458] text-sm px-3 py-1 rounded-full uppercase">
                {{ tag }}
              </span>
            </div>
            <h1 class="text-[32px]/[42px] font-semibold mb-[16px]">{{ props.title }}</h1>
            <p class="text-[18px]/[23px]">{{ props.description }}</p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        image: String,
        tags: Array,
        title: String,
        description: String
    })
</script>