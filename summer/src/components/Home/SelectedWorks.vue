<template>
  <div class="bg-black text-white py-[31%] md:py-[13%] lg:py-[8%] xl:py-[7%] px-[6%] md:px-[3%] lg:px-[6%] xl:px-[7%]">
    <div class="flex flex-col md:flex-row md:justify-between items-center ">
        <div>
          <h4 class="text-[36px]/[47px] md:text-[64px]/[83px] font-medium ">Selected works</h4>
          <p class="text-[18px]/[23px]">See our featured works here</p>
        </div>
        <button class="w-[180px] h-[68px] border-2 border-[#008576] mt-5 md:mt-0">View All</button>
    </div>
    <div class="mt-15 flex flex-col gap-15 lg:flex-wrap lg:flex-row">
      <WorkCaseCard 
        v-for="card in cardsData"
      :key="card.id"
      :image="card.image"
      :title="card.title"
      :tags="card.tags"
      :description="card.description"/>
    </div>
  </div>
</template>

<script setup>
    import WorkCaseCard from './WorkCaseCard.vue';
    import { ref } from 'vue';

    import img1 from '../../assets/firstFoto.jpg';
    import img2 from '../../assets/secondFoto.jpg';
    import img3 from '../../assets/thirdFoto.jpg';
    import img4 from '../../assets/fourFoto.jpg';


    const cardsData = ref([
  {
    id: 1,
    image: img1,
    title: 'XoolTech',
    tags: ['brand identity', 'Web Design'],
    description: "We partnered with Rainfall’s amazing team to create a website that tells their unique story and reflects on their values."
  },
  {
    id: 2,
    image: img2,
    title: 'Flinkerk',
    tags: ['Web Design'],
    description: "Flinkwerk helps streamline your projects to develop and deploy software for the web in a fully automated and highly configurable..."
  },
  {
    id: 3,
    image: img3,
    title: 'Alberto Maya',
    tags: ['Design', 'Web development'],
    description: "Flinkwerk helps streamline your projects to develop and deploy software for the web in a fully automated and highly configurable..."
  },
  {
    id: 4,
    image: img4,
    title: 'Flickerd',
    tags: ['Graphic Design'],
    description: "Flinkwerk helps streamline your projects to develop and deploy software for the web in a fully automated and highly configurable...."
  }
]);
</script>