<script setup>
import ButtonTitle from "./ButtonTitle.vue"
import ButtonDrawing from "./ButtonDrawing.vue"
import ButtonCode from "./ButtonCode.vue"


</script>
<template>
  <div class="wrap">
    <ButtonTitle />
    <ButtonDrawing />
    <ButtonCode />
  </div>
</template>
<style scoped>
.wrap {
  box-sizing: border-box;
  border: 1px solid #ccc;
}
</style>