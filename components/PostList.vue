<template>
  <section class="post-list">
    <div class="post-item" v-for="post in postList" :key="post._path">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
      <NuxtLink :to="post._path">Read More =></NuxtLink>
    </div>
  </section>
</template>

<script setup>
const postList = await queryContent('post').find();
</script>