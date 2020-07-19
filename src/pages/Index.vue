<template>
  <Layout :isHome="true">
    <section class="projects">
      <h2>Our Projects</h2>

      <article>
        At UNIPRO, we believe everyone has a right to live free of poverty in a secure and more equitable world where they are able to realize their potential. Inspired by our Islamic ethos, we are open-minded and pluralistic. We believe that all people, regardless of race or religion should have access to education, to earn a sustainable livelihood and to have access to basic social services.
      </article>
      <div class="pure-g">
            <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
              <div class="post-card content-box">
                <div class="post-card__content">
                  <h2 class="post-card__title">Sponsor An Orphan Initiative</h2>
                  <p class="post-card__description"> UNIPRO sponsors Orphans through generous donations and pays for food, clothing, education and medicine for vulnerable children living in our country. </p>
                </div>
              </div>
            </div>
            <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
              <div class="post-card content-box">
                <div class="post-card__content">
                  <h2 class="post-card__title">Transform Benighted Village to Civilized Society</h2>
                  <p class="post-card__description"> UNIPRO donors are contributing for sanitation and adoption projects of rural villages to transform the unschooled benighted village to an enlightened civilized society. </p>
                </div>
              </div>
            </div>
            <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
              <div class="post-card content-box">
                <div class="post-card__content">
                  <h2 class="post-card__title">Career Guidance</h2>
                  <p class="post-card__description">UNIPRO provides Career and Educational Guidances to students in both digital platform as well as by conducting events with top-class career counsellors.</p>
                </div>
              </div>
            </div>
        </div>
      </section>
</div>

  </Layout>
</template>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style lang="scss">
  .projects {
    padding: var(--section-spacing);

    h2 {
      margin-bottom: var(--section-spacing);
    }

    article {
      margin-bottom: var(--section-spacing);
    }

    .post-card {
      margin-right: 10px;
    }
  }
</style>
