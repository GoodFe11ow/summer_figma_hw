<script setup>

const props = defineProps({
  image: String,
  title: String,
  tags: Array,
  description: String,
});
</script>

<template>
  <div class="mx-[6%] border-b-1 border-[#004B49]">
    <img :src="image" alt="card image" class="h-[210px] w-[280px] object-cover">
    <div class="flex flex-col gap-5 mt-4 mb-5">
      <h3 class="text-4xl font-semibold">{{ props.title }}</h3>
      <div v-if="props.tags && props.tags.length > 0" class="">
        <span v-for="(tag, index) in props.tags" :key="index" class="bg-[#006458] text-sm px-3 py-1 rounded-full uppercase mr-4">
          {{ tag }}
        </span>
      </div>
    </div>
    <p class="text-lg  pb-4">{{ props.description }}</p>
  </div>
</template>