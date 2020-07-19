<template>
<div>
  <div class="post-title">
    <h1 class="post-title__text">
      {{post.title }}
    </h1>

    <PostMeta :post="post" />

  </div>

  <div class="post content-box">
    <div class="post__header">
      <g-image alt="Cover image" v-if="post.cover_image" :src="post.cover_image" />
    </div>

    <div class="post__content" v-html="post.content" />

    <div class="post__footer">
      <PostTags :post="post" />
    </div>
  </div>

  <div class="post-comments">
    <!-- Add comment widgets here -->
  </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
  metaInfo () {
    return {
      title: this.post.title
    }
  }
}
</script>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    } 
  }
}

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>