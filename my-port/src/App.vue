<script setup>
import { ref } from "vue";
const isHovered = ref(false);
</script>
<template>
  <router-view />
</template>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");

h1,
p {
  font-family: "Inter", sans-serif;
}
</style>
