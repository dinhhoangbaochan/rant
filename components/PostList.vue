<template>
  <section class="post-list">
    <div class="post-item py-4 border-bottom" v-for="post in postList" :key="post._path">
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
      <NuxtLink :to="post._path">Read More =></NuxtLink>
    </div>
  </section>
</template>

<script setup>
const postList = await queryContent('post').find();
</script>