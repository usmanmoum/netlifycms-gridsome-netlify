<template>
  <Layout>
    <PostCardDetails :post="$page.general" />
  </Layout>
</template>

<script>
import PostCardDetails from '~/components/PostCardDetail'

export default {
  components: {
    PostCardDetails
  }
}
</script>

<page-query>
query General ($id: ID!) {
  general (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    content
    cover_image
  }
}
</page-query>
