<template>
  <Layout>
    <PostCardDetails :post="$page.education" />
  </Layout>
</template>

<page-query>
query Education ($id: ID!) {
  education (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    content
    cover_image
  }
}
</page-query>

<script>
import PostCardDetails from '~/components/PostCardDetail'

export default {
  components: {
    PostCardDetails
  }
}
</script>

<style lang="scss">

</style>

