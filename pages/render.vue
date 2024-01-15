<template>
  <h1>Hello Fen</h1>

  <ContentRenderer :value="data">
    <ContentRendererMarkdown :value="data" />
  </ContentRenderer>
</template>

<script setup>

const { data } = await useAsyncData('page-data', () => queryContent('/blog/test').findOne())

</script>