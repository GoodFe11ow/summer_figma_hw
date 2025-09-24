<template>
    <div class="flex w-full gap-8">
        <div class="">
            <img :src="image" alt="" class="h-[210px] object-cover">
            <div v-if="props.tags && props.tags.length > 0" class="">
              <span v-for="(tag, index) in props.tags" :key="index" class="bg-[#006458] text-sm px-3 py-1 rounded-full uppercase mr-4">
                {{ tag }}
              </span>
            </div>
            <h1>{{ props.title }}</h1>
            <p>{{ props.description }}</p>
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