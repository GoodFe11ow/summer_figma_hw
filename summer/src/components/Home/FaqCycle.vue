<template>
    <div class="flex gap-5 mb-10 justify-center items-center">
        <div class="max-w-[200px]">
            <p class="text-[24px] font-semibold border-b-1 pb-4 border-[#004B49]">{{ props.question }}</p>
            <p class="pt-5 text-[18px]" v-show="showAnswer">{{ props.answer }}</p>
        </div>
        <button class="w-15 h-15 bg-[#004B49] rounded-full transition-all duration-300" :class="{'rotate-45': showAnswer, 'bg-[#008576]': showAnswer}" @click="showAnswer =! showAnswer"><span class="text-[40px] font-extralight">+</span></button>
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