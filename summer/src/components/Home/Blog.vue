<template>
    <div class="bg-[#001412] text-white px-[6%] py-[22%] md:py-[13%] md:px-[4%] lg:py-[8%] lg:px-[6%] xl:py-[7%] xl:px-[7%]">
        <div class="mb-[60px] flex flex-col text-center items-center md:flex-row md:justify-between">
            <h1 class="text-[40px] font-semibold md:text-[64px]">Latest Articles</h1>
            <a class="py-[16px] px-[48px] w-[186px] mt-[20px]  border-[#008576] border-1 text-[18px]">View All</a>
        </div>
        <div class="flex overflow-hidden gap-[3%]">
            <BlogItem  v-for="(el, index) in blogData"
                :key="index"
                :image="el.image"
                :tags="el.tags"
                :title="el.title"
                :description="el.description"
                class="flex-shrink-0 md:w-[31%]"
            />
        </div>
    </div>
</template>

<script setup>
    import BlogItem from './BlogItem.vue'
    import { ref } from 'vue';
    import blog1 from '../../assets/blog1.jpg'
    import blog2 from '../../assets/blog2.jpg'
    import blog3 from '../../assets/blog3.jpg'


    const blogData = ref([
        {
            image: blog1,
            tags: ['brand identity', ' 5 Min read'],
            title: 'The importance of a strong brand identity',
            description: 'This post could discuss the process of developing a brand identity that reflects the values and mission of a business. It could include...'
        },
        {
            image: blog2,
            tags: ['UI/UX', ' 5 Min read'],
            title: 'Top 10 UI and UX design mistakes to avoid',
            description: 'This post could discuss the process of developing a brand identity that reflects the values and mission of a business. It could include...'
        },
        {
            image: blog3,
            tags: ['Web Development', ' 5 Min read'],
            title: 'The benefits of using a web framework',
            description: 'This post could discuss the process of developing a brand identity that reflects the values and mission of a business. It could include...'
        }
    ])
</script>