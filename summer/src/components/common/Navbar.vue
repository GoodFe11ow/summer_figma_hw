<script setup>
    import BurgerMenu from './BurgerMenu.vue';
</script>

<template>
    <div class="flex justify-between mx-5 md:mx-8 xl:mx-20">
        <router-link to="/">
            <h3 class="text-[28px] md:text-[36px] md:font-medium">Nitro</h3>
        </router-link>
        <BurgerMenu />
    </div>
</template>