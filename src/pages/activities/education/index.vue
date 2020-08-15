<template>
  <Layout>
    <Banner :class="'education'" :displayInfo="false"></Banner>
    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.education.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

  </Layout>
</template>

<page-query>
query {
  education: allEducation(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        cover_image
        content
        path
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'
import Banner from '~/components/Banner.vue'

export default {
  components: {
    Author,
    PostCard,
    Banner
  },
  metaInfo: {
    title: 'Education'
  }
}
</script>
