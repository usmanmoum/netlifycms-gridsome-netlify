<template>
  <Layout :isHome="true">
    <section class="projects">
      <h2>Our Projects</h2>
      <div class="colored-line-left"></div>

      <article>
        At UNIPRO, we believe everyone has a right to live free of poverty in a secure and more equitable world where they are able to realize their potential. Inspired by our Islamic ethos, we are open-minded and pluralistic. We believe that all people, regardless of race or religion should have access to education, to earn a sustainable livelihood and to have access to basic social services.
      </article>
      <div class="pure-g">
            <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
              <div class="post-card content-box">
                <div class="post-card__header">
                  <img src="/images/uploads/orphan.jpeg" />
                </div>
                <div class="post-card__content">
                  <h2 class="post-card__title">Sponsor An Orphan Initiative</h2>
                  <p class="post-card__description"> UNIPRO sponsors Orphans through generous donations and pays for food, clothing, education and medicine for vulnerable children living in our country. </p>
                </div>
              </div>
            </div>
            <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
              <div class="post-card content-box">
                <div class="post-card__header">
                  <img src="/images/uploads/join-hands.jpeg" />
                </div>
                <div class="post-card__content">
                  <h2 class="post-card__title">Transform Benighted Village to Civilized Society</h2>
                  <p class="post-card__description"> UNIPRO donors are contributing for sanitation and adoption projects of rural villages to transform the unschooled benighted village to an enlightened civilized society. </p>
                </div>
              </div>
            </div>
            <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
              <div class="post-card content-box">
                <div class="post-card__header">
                  <img src="/images/uploads/career-guidance.jpeg" />
                </div>
                <div class="post-card__content">
                  <h2 class="post-card__title">Career Guidance</h2>
                  <p class="post-card__description">UNIPRO provides Career and Educational Guidances to students in both digital platform as well as by conducting events with top-class career counsellors.</p>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section class="projects">
        <h2>Our Story:</h2>
        <div class="colored-line-left"></div>

        <article>
          <blockquote>The Messenger of Allah Sallallahu ‘alaihi wasallam said, *’The believers, in their love, mutual kindness, and close ties, are like one body; when any part complains, the whole body responds to it with wakefulness and fever.’ – Muslim</blockquote>
          <br><br>
          UNIPRO is an independent humanitarian and development non-profit organization driven by 600+ like minded professionals. Inspired by Islamic faith and guided by our values, we believe that people with wealth have a duty to those less fortunate— regardless of race, belief, political affiliation and gender.
          <br><br>
          Our projects provide poor people with access to vital services, impoverished children to pursue quality education, career guidance to eradicate unemployment, financial support to masjids to raise Aalims having true Islamic ethos for society and assisting life saving medical emergency patients. We provide lasting routes out of poverty and empowering vulnerable people to transform their lives and their communities.
          <br><br>
          UNIPRO being a hub for Chennai IT Professionals with complete transparency includes affiliated partners and field offices to reach out the need’s all over Tamil Nadu.
        </article>

        <div class="pure-g">
            <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
              <div class="post-card content-box last">
                <div class="post-card__header">
                  <img src="/images/uploads/transparency.jpg" />
                </div>
                <div class="post-card__content">
                  <h2 class="post-card__title">Transparency</h2>
                  <p class="post-card__description">UNIPRO works under the guidance of scholars who ensure that the charity’s role as a trustee is always fulfilled. Knowing that we are all ultimately accountable to the Almighty, the charity strives to maintain transparency and accountability.
                  </br></br>

                  All donated funds are monitored, reviewed and audited, ensuring Zakah, Sadaqah and other funds are spent correctly.
                  </br></br>

                  The charity also has a full and transparent audit trail from the donor to the beneficiary.
                  </br></br>

                  Please also note that UNIPRO always issues a receipt for a donation. Please always ask for a receipt if you hand over any money to a representative, official or otherwise, of UNIPRO.</p>
                </div>
              </div>
            </div>
            <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
              <div class="post-card content-box">
                <div class="post-card__header">
                  <img src="/images/uploads/mission.jpg" />
                </div>
                <div class="post-card__content">
                  <h2 class="post-card__title">Our Misson</h2>
                  <p class="post-card__description"> UNIPRO envisages a caring world where communities are empowered, social obligations are fulfilled and people respond as one to the suffering of others. </p>
                </div>
              </div>
            </div>
            <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
              <div class="post-card content-box">
                <div class="post-card__header">
                  <img src="/images/uploads/values.jpg" />
                </div>
                <div class="post-card__content">
                  <h2 class="post-card__title">Our Values</h2>
                  <p class="post-card__description"> We are guided by the timeless values and teachings of the Qur’an and Prophetic example (Sunnah), which recognize that people with wealth have a duty to those who are less fortunate. Our values are:
                    <br><br>
                    <ul>
                      <li>Sincerity</li>
                      <li>Excellence</li>
                      <li>Compassion</li>
                      <li>Social Justice</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
        </div>

      </section>
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
    padding: 0 var(--section-spacing) 0;

    h2 {
      margin-top: 0;
    }

    blockquote {
      background: var(--bg-content-color);
      padding: var(--section-spacing);
      border-radius: 15px;
      border-color: var(--link-color);
      border-right: 4px solid var(--link-color);
      font-style: italic;
    }

    ul {
      margin-left: 20px;
      
      li {
        list-style-type: disc;
      }
    }

    /*&:nth-child(1) {
      
    }*/

    article {
      margin-top: var(--section-spacing);
      margin-bottom: var(--section-spacing);
      font-size: var(--section-font-size);
    }

    .post-card {
      margin-right: var(--section-spacing);
    }

    .post-card:hover {
      border-bottom: 5px solid var(--link-color);
    }
  }

  .colored-line-left {
    background: var(--link-color);
    width:80px;
    height: 10px;
  }
</style>
