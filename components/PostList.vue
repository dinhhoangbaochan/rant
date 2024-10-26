<template>
  <div class="post-list">
    <div class="post-item" v-for="post in postList">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>

<script setup>

const postList = [
  {
    id: 0,
    title: "First post",
    description: "This is the description for my first post!"
  },

  {
    id: 1,
    title: "Second post",
    description: "This is the description for my second post!"
  },
]

</script>