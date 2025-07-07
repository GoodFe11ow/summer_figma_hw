<script setup>
    import BurgerMenu from './BurgerMenu.vue';
</script>

<template>
    <div class=" bg-transparent absolute text-white w-full flex justify-between px-5 md:px-8 lg:px-10 xl:px-[10%]">
        <router-link to="/">
            <h3 class="text-[28px] md:text-[36px] md:pl-8 lg:pl-20 xl:pl-0 md:font-medium">Nitro</h3>
        </router-link>
        <BurgerMenu class="md:pr-8 xl:pr-0"/>
    </div>
</template>