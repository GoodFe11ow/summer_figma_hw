<template>
    <div class="">
        <div class="flex gap-5 mt-5 md:mt-10 justify-between items-center border-b-1 pb-4 border-[#004B49]">
            <p class="text-[24px] max-w-[71%] font-semibold  md:text-[28px] md:max-w-[88%]">{{ props.question }}</p>
            <button class="w-15 h-15 bg-[#004B49] rounded-full transition-all duration-300" :class="{'rotate-45': showAnswer, 'bg-[#008576]': showAnswer}" @click="showAnswer =! showAnswer"><span class="text-[40px] font-extralight">+</span></button>
        </div>
        <p class="pt-5 text-[18px]" v-show="showAnswer">{{ props.answer }}</p>
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