<template>
    <div class="bg-black text-white py-[80px] px-[20px]">
        <div class="text-center">
            <h3 class="text-[20px] font-bold text-[#00A693]">Our Design Process</h3>
            <h2 class="text-[40px]/[52px] font-semibold mt-[12px] mb-[20px]">What is your web design process? How do you start?</h2>
            <p class="text-[20px] font-light">Our main web design process is divided into the following steps:</p>
        </div>
        <div class="mt-20 flex flex-col gap-20 relative">
            <div class="h-[100%] absolute border-l-4 z-[0] left-2 border-[#006458]"></div>
            <WorkProcessCard 
            v-for="(a, i ) in processData"
            :key="i"
            :title="a.title"
            :description="a.description"/>
        </div>
    </div>
</template>

<script setup>
    import WorkProcessCard from './WorkProcessCard.vue';

    const processData = [
        {
            title: 'Discovery',
            description: 'Before starting anything, we work with the client to collect detailed information about the business, digital product, its users and explore every aspect of the project.'
        },
        {
            title: 'Scope',
            description: 'The steps included in a UX audit will vary depending on the time and budget allotted to the project.'
        },
        {
            title: 'Web Structure',
            description: 'We typically start with user personas, key use cases, competitive analysis, moodboards and with a well defined scope we can then start to build sitemaps, information architecture and proceed with wireframes.'
        },
        {
            title: 'Design Concept to Layout Design',
            description: 'Now that we have wireframes at hand, we start with content writing for the individual pages with keeping SEO in mind. We start arranging visual elements—like text, images, and shapes along the way.'
        },
        {
            title: 'Visual design',
            description: 'Now we focus on the interface of the website keeping visual brand in mind. Typography, iconography, brand color, photography style and art direction will make sure the website looks consistent and visually gorgeous.'
        },
        {
            title: 'Site Development',
            description: 'With designs being approved, its time to take those pages and start developing. We mostly start with frond-end (HTML, CSS) then we go through the back-end and so on.'
        },
        {
            title: 'Site Testing',
            description: 'Before lunching the site, it will be placed on a internal server where only internal user and anyone who we share the link with can view it. The site testing is cruicial as there will inevitably be issues that need to be addressed before the site goes live. '
        },
        {
            title: 'Site Launch',
            description: 'The big day is here! We’ve tested the site, approved by stakeholders and we’re ready to launch. Launching the site is just a start,  we should be prepared for feedback from users to make immediate changes and adjustments. '
        },
        {
            title: 'Site Maintenance',
            description: 'Dynamic websites are living, breathing entities that need constant care and maintenance. Updating contents, making changes to the backends and fixing broken links and the list goes on,  are all in a day’s work. All of these phases are cruicial to the Web design process.'
        },
    ]
</script>