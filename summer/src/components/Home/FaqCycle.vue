<template>
    <div>
        <div>
            <p>{{ props.question }}</p>
            <p v-show="showAnswer">{{ props.answer }}</p>
        </div>
        <button @click="showAnswer =! showAnswer">X</button>
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