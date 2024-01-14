<template>
<main>
  <div class="py-4 article-card" v-for="article in articles">
    <h2 class="text-xl font-bold text-red-500">
      <a :href="article._path" class="text-secondary">
        {{ article.title }}
      </a>
    </h2>
    <h3 class="font-light text-gray-700">{{ article.exc }}</h3>
    <h3 class="text-xs font-light italic py-1">{{ article.date }} by {{ article.author }}</h3>
  </div>
</main>
</template>

<script setup>
const articles = await queryContent('/').only(['id', '_path', 'title', 'date', 'exc', 'author']).find()
</script>