<script setup>
import InsButton from "./InsBUTTON/Button.vue"
import FollowMouseButton from './FollowMouseButton/Button.vue'
</script>
<template>
  <h1>Buttons</h1>
  <div class="container">
    <InsButton />
    <FollowMouseButton />
  </div>
</template>
<style scoped>
:root {
  --title-font-size: 24px;
  --subtitle-font-size: 14px;
  --button-style-padding: 20px;
  --button-area-width: 200px;
}

/* 整个大容器 */
.container {
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  align-content: center;
  gap: 20px;
}
</style>