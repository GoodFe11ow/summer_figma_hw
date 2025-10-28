<template>
    <div class="bg-[#001412] text-white px-[6%] py-[25%] md:px-[4%] md:py-[13%] lg:px-[6%] lg:py-[8%] xl:flex xl:gap-15 xl:p-[7%]">
        <div>
            <h2 class="text-[36px] font-semibold mb-15 mr-1 md:text-[48px] md:mr-[50%] lg:text-[64px] lg:mr-[57%] xl:mr-[30%]">Frequently asked questions</h2>
        </div>
        <div>
            <FaqCycle v-for="(el, index) in FaqData"
                :key="index"
                :question="el.question"
                :answer="el.answer"/>
        </div>
    </div>
</template>

<script setup>
    import FaqCycle from './FaqCycle.vue';
    import { ref } from 'vue';

    const FaqData = ref([
        {
            question: 'What type of companies do you work with? Who are your target customers',
            answer: 'Our target customers and companies mostly start-ups, small businesses, non-profits, and enterprise clients across the industries.'
        },
        {
            question: 'How long does it take to successfully complete a website?',
            answer: ' lorem ipsum'
        },
        {
            question: 'Does your web design agency provide only design or web development as well?',
            answer: 'lorem ipsum'
        },
        {
            question: 'Can you work with my existing Marketing team?',
            answer: 'lorem ipsum'
        },
        {
            question: 'Will you be there for me after the website is complete?',
            answer: 'lorem ipsum'
        }
    ])
</script>