<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom">
      # {{ $page.tag.title }}
    </h1>

    <div class="posts">
      <PostCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Education {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            content
          },
          ...on General {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            content
          },
          ...on Entrepreneurship {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'
export default {
  components: {
    Author,
    PostCard
  },
  metaInfo () {
    return {
      title: "Tags - " +this.$page.tag.title
    }
  }
}
</script>

<style lang="scss">
</style>