<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
  import Footer from './components/common/Footer.vue';
  import Navbar from './components/common/Navbar.vue';
</script>