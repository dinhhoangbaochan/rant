<template>
  <div :class="globalStates.isDarkMode ? 'dark-mode' : 'light-mode'">
    <NuxtPage />
  </div>
</template>
<script setup>
import { onMounted } from 'vue';

const globalStates = useGlobalStates();
// onMounted(() => {
// 	console.log(localStorage)
// })

console.log(globalStates.isDarkMode)

// onMounted(() => {
//   console.log(localStorage)
//   const globalState = useGlobalStates();
//   const localMode = localStorage.getItem('is-dark-mode');
//   const setDarkMode = (localMode) ? localMode : false;
//   globalState.setDarkMode(setDarkMode);
// })
</script>

<style lang="scss">

</style>