<template>
    <div class="bg-white text-[#004B49] px-[6%] py-[13%] pt-[25%]">
        <div class="mb-[50px]">
            <h1 class="text-[36px] font-semibold mb-6">Blogs</h1>
            <p class="text-[18px] font-light">Discover the latest news, tips and user research insights from Nitro.</p>
        </div>
        <div class="mb-10">
            <h1 class="text-[32px] font-semibold mb-5">All Posts</h1>
            <div>
                <DropdownMenu class="">
                    <DropdownMenuTrigger class="text-[20px] w-full bg-[#CCEDE9] flex justify-between py-[12px] pl-[20px]">Category <span class="pr-[20px]"><i class="fa-solid fa-chevron-down"></i></span></DropdownMenuTrigger>
                    <DropdownMenuContent class="w-[280px] rounded-none m-0 bg-[#CCEDE9] ">
                        <DropdownMenuItem>News</DropdownMenuItem>
                        <DropdownMenuItem>Tech</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>News</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
        <div class="flex flex-col  gap-[3%]">
            <BlogItem v-for="(el, index) in blogData" :key="index" :image="el.image" :tags="el.tags" :title="el.title"
                :description="el.description" class="flex-shrink-0 md:w-[31%] " />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import BlogItem from '../components/Home/BlogItem.vue';

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@/components/ui/dropdown-menu';



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