<template>
  <Layout :show-logo="false">

    <!-- List posts -->
    <div class="posts">
      Education
      <br>
      Entrepreneurship
      <br>
      Career
      <br>
      General
    </div>

  </Layout>
</template>


<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: 'Activities'
  }
}
</script>
