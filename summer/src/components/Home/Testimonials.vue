<script setup>
import { ref, computed } from 'vue';

import avatar1 from '../../assets/avatar/avatar1.png'
import avatar2 from '../../assets/avatar/avatar2.png'
import avatar3 from '../../assets/avatar/avatar3.png'

const testimonials = ref([
  { id: 1, text: 'The visual guide will provide a view to the customer of what their website or project will end up looking like. It ensures that they are kept up to date on any developments and changes made to the structure or visuals. ', author: 'Theresa Webb', avatar: avatar1, role: 'Marketing Coordinator' },
  { id: 2, text: 'The visual guide will provide a view to the customer of what their website or project will end up looking like. It ensures that they are kept up to date on any developments and changes made to the structure or visuals. .', author: 'Floyd Miles', avatar: avatar2, role: 'IT Analyst' },
  { id: 3, text: 'The visual guide will provide a view to the customer of what their website or project will end up looking like. It ensures that they are kept up to date on any developments and changes made to the structure or visuals. ', author: 'Henry Itondo', avatar: avatar3, role: 'Co-founder of Source DS' }
]);

const currentIndex = ref(0);

const isLargeScreen = computed(() => {
  return window.innerWidth >= 1280;
});

const next = () => {
  if (isLargeScreen.value) {
    const firstItem = testimonials.value.shift();
    testimonials.value.push(firstItem);
  } else {
    const nextIndex = currentIndex.value + 1;
    currentIndex.value = nextIndex >= testimonials.value.length ? 0 : nextIndex;
  }
};

const prev = () => {
  if (isLargeScreen.value) {
    const lastItem = testimonials.value.pop();
    testimonials.value.unshift(lastItem);
  } else {
    const prevIndex = currentIndex.value - 1;
    currentIndex.value = prevIndex < 0 ? testimonials.value.length - 1 : prevIndex;
  }
};

const carouselStyle = computed(() => {
  if (isLargeScreen.value) {
    return {};
  }
  const translateX = -currentIndex.value * 100;
  return { transform: `translateX(${translateX}%)` };
});

</script>

<template>
  <div class="relative bg-[#001412] px-[6%] py-[25%] md:px-[4%] md:py-[13%] flex flex-col lg:px-[6%] lg:py-[8%] xl:px-[4%] xl:py-[5%]">
    <div>
      <h1 class="text-white text-[36px] text-center font-medium mb-10 md:text-[48px] md:font-semibold md:mb-15 xl:text-[54px]">A few words from our clients</h1>
    </div>
    <div class="overflow-hidden">
      <div
        class="flex gap-8"
        :style="carouselStyle"
      >
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="flex-shrink-0 w-full md:w-[48%] xl:w-[32%]"
        >
          <div class="bg-[#00211D] text-white  p-5 md:p-10">
            <p class="text-[20px] font-normal md:font-light">{{ testimonial.text }}</p>
            <div class="flex mt-[33px] gap-4 justify-start items-center">
              <img
              :src="testimonial.avatar"
              :alt="testimonial.author + ' avatar'"
              class="w-12 h-12 md:w-15 md:h-15 rounded-full"
                        />
              <div>
                <p class="font-bold text-[20px] md:text-[24px]"> {{ testimonial.author }}</p>
                <p class=" md:text-[18px] tracking-[-0.02em]">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="hidden lg:justify-center  lg:flex gap-10 mt-15">
      <div class="inset-y-0 left-0 lg:flex items-center ">
        <button @click="prev" class="bg-[#001412] text-white p-2 rounded-full">
          &lt;
        </button>
      </div>
      
      <div class="inset-y-0 right-0 lg:flex items-center ">
        <button @click="next" class="bg-[#001412] text-white p-2 rounded-full">
          &gt;
        </button>
      </div>
    </div>
  </div>
</template>