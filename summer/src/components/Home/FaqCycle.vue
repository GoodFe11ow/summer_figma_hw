<template>
    <div class="flex gap-5">
        <div class="max-w-[200px]">
            <p>{{ props.question }}</p>
            <p v-show="showAnswer">{{ props.answer }}</p>
        </div>
        <button class="w-15 h-15 bg-[#004B49] rounded-full" @click="showAnswer =! showAnswer">+</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        question: String,
        answer: String
    });

    const showAnswer = ref(false)
</script>