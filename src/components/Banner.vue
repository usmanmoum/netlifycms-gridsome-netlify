
<template>
  <section class="banner-wrapper">
  	<section class="banner">
      <template v-if="displayInfo">
        <h2>United Professionals Association</h2>
        <h4 class="sub-title">Guided by Scholars. Driven by Professionals.</h4>
        <div class="details"> This is a test </div>
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
    min-height: 100vh;
    display: flex;
    align-items: center;

    .banner {
      margin: 0 auto;
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