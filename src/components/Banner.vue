
<template>
  <section class="banner-wrapper">
  	<section class="banner">
      <template v-if="displayInfo">
        <h2>United Professionals Association</h2>
        <h4 class="sub-title">Guided by Scholars. Driven by Professionals.</h4>
        <div class="details"> 
          <button><g-link to="/donation">Donate Here!</g-link></button>
        </div>
      </template>
		</section>
	</section>
</template>


<style lang="scss">
  .banner-wrapper {
    background: url('/images/uploads/united-pro1.jpeg') top center;
    padding: 10%;
    text-align: center;
    color: var(--banner-font-color);
    background-size: cover;
    min-height: 65vh;
    display: flex;
    align-items: center;

    .banner {
      margin: 0 auto;

      .details {

        button {
          background: var(--link-color);
          border-radius: var(--radius);
          border-color: var(--link-color);

          a {
            font-size: var(--banner-font-size);
            padding: 10px;
            color: var(--bg-content-color);
            display: inline-block;
          }
        }
      }
    }

    h2 {
      font-size: var(--banner-font-size);
      color: var(--banner-font-color);
    }

    h4 {
      color: var(--banner-font-color);
    }
  }

  .education {
    background-image: url('/images/uploads/united-pro.jpg');
    margin-top: calc(var(--space) * -1);
    margin-bottom: var(--space);
  }
</style>

<script>
export default { 
  props: {
    displayInfo: { default: true }
  }
}
</script>