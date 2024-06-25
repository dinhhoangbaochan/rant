<template>
  <div class="header">
    <h1>Hello, Chan Dinh</h1>
    <button @click="switchMode">Switch Mode</button>
  </div>
</template>

<script setup>
// import { useGlobalStates } from "@/stores/global";

const globalStates = useGlobalStates();

const switchMode = () => {
  globalStates.changeMode();
}
</script>