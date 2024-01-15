<template>
  <main>
    <div class="container mx-auto">
      <h1>cc</h1>
      <ContentRenderer v-if="page.body" :value="page">
        <h1>{{ page.title }}</h1>
        <ContentRendererMarkdown :value="page" />
      </ContentRenderer>
    </div>
  </main>
</template>

<script setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
</script>