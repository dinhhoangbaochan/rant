<template>
  <main>
    <div class="container">
      <Header />
      <ContentDoc v-slot="{ doc }">
        <article>
          <section class="article-title">
            <dl>{{ doc.date }}</dl>
            <h1>{{ doc.title }}</h1>
          </section>
          
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </main>
</template>

<script setup>
  const route = useRoute();
  console.log(route.fullPath)

  const currentPost = await queryContent(route.fullPath).find();
  const postDate = new Date(currentPost[0].date);

  console.log(currentPost, postDate.getMonth() + 1);
</script>