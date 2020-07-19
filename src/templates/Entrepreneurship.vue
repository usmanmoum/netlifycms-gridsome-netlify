<template>
  <Layout>
    <PostCardDetails :post="$page.entrepreneurship" />
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
query Entrepreneurship ($id: ID!) {
  entrepreneurship (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    content
    cover_image
  }
}
</page-query>
