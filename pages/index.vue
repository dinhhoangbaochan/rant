<template>
  <Header />
  <h1>Hello</h1>
  <h2>List of blog posts</h2>
  <ul>
    <ContentList path="/posts" v-slot="{list}">
      <li class="" v-for="post in list" v-bind:key="post.id">
        <a :href="post._path">
          {{ post.title }} + 
          {{ post._path }}
        </a>
        <!-- <pre>
          {{ post }}
        </pre> -->
      </li>
    </ContentList>
  </ul>
</template>